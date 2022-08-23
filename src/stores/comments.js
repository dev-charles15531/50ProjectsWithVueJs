import { defineStore } from "pinia";
import { computed, ref } from "vue";
import COMMENTS_API from "../apis/comments";

export const useCommentsStore = defineStore("comments", () => {
  // error mssg
  const errorMssg = ref("");

  // All comments
  const allComments = ref([]);

  // New comment/reply data to add or update (this data would be useful when adding or editing comment/reply data)
  const newData = ref({});
  /**
   * Sets a new comment/reply to be posted or edited
   */
  const setNewData = (comment) => {
    newData.value = comment;
  };

  // New comment/reply data for delete (this data would be useful when deleting comment/reply data)
  const toDeleteData = ref({});
  /**
   * Sets a new comment/reply data for deletion
   */
  const setToDeleteData = (data) => {
    toDeleteData.value = data;
  };

  /**
   * Computed method to get all comments
   */
  const getAllComments = computed(() => {
    // first fetch all the comments from our mock db
    fetchAllComments().catch(() => {
      errorMssg.value =
        "We were unable to fetch comments. This might be due to a network error. \n Please try again later.";
    });

    // return all that was fetched
    return allComments;
  });

  /**
   * Fetch all coments from our mock db
   */
  const fetchAllComments = async () => {
    const response = await COMMENTS_API.get();

    // first empty the allComments variable to avoid duplicates
    allComments.value = [];

    // populate the allComments variable
    response.data.forEach((comment) => {
      allComments.value.push(comment);
    });
  };

  /**
   * Fetches a single comment by id from mock database
   * @param {int} id The comment id to fetch
   * @returns The fetched comment
   */
  const fetchSingleComment = async (id) => {
    try {
      const response = await COMMENTS_API.get("/" + id);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Update a comment in the mock DB
   * @param {int} id The id of comment to update
   * @param {object} data The new comment object
   */
  const updateComment = async (id, data) => {
    id = parseInt(id);
    try {
      await COMMENTS_API.put("/" + id, data);

      // refresh all comments
      fetchAllComments();

      // empty the newData object
      newData.value = {};
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Posts new comment to mock db
   */
  const postNewComment = async () => {
    try {
      await COMMENTS_API.post("/", newData.value);

      // refresh all comments
      fetchAllComments();

      // empty the newData object
      newData.value = {};
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Deletes a comment from mock db
   * @param {int} id The id of comment to delete
   */
  const deleteComment = async (id) => {
    try {
      await COMMENTS_API.delete("/" + id);

      // refresh all comments
      fetchAllComments();

      // empty the toDeleteData object
      toDeleteData.value = {};
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * process comment delete
   */
  const processCommentDelete = async () => {
    // check if we are deleting a comment or a reply
    if (toDeleteData.value.hasOwnProperty("parentCommentId")) {
      //---> it's a reply <---//

      let idOfCommentToDeleteReplyFrom = toDeleteData.value.parentCommentId;
      let replyId = toDeleteData.value.commentId;

      // get the comment to delete reply from
      const commentToDeleteReplyFrom = await fetchSingleComment(
        idOfCommentToDeleteReplyFrom
      );
      // get all replies
      let allReplies = commentToDeleteReplyFrom.replies;

      // Find index of the specific reply to delete and delete the reply
      let replyIndex = allReplies.findIndex((reply) => reply.id == replyId);
      if (replyIndex > -1) {
        allReplies.splice(replyIndex, 1);
      }

      // repopulate with new comment data
      commentToDeleteReplyFrom.replies = allReplies;

      // update the comment
      updateComment(idOfCommentToDeleteReplyFrom, commentToDeleteReplyFrom);
    } else {
      //---> it's a comment ---//

      let id = toDeleteData.value.commentId;
      deleteComment(id);
    }
  };

  /**
   * Posts new reply to comment in mock db
   */
  const postNewReply = async () => {
    const idOfCommentToReplyOn = newData.value.commentId;

    // get the comment to reply on
    const commentToReplyOn = await fetchSingleComment(idOfCommentToReplyOn);

    // Assign reply id (1 if its a new reply or Previous reply id + 1 if not)
    if (commentToReplyOn.replies.length >= 1) {
      let repliesLength = commentToReplyOn.replies.length;
      let lastReply = commentToReplyOn.replies[repliesLength - 1];
      let lastReplyId = lastReply.id;
      newData.value.id = lastReplyId + 1;
    } else {
      newData.value.id = 1;
    }

    delete newData.value.commentId;
    commentToReplyOn.replies.push(newData.value);

    // update the comment with new reply
    updateComment(idOfCommentToReplyOn, commentToReplyOn);
  };

  return {
    fetchAllComments,
    fetchSingleComment,
    getAllComments,
    setNewData,
    setToDeleteData,
    postNewComment,
    postNewReply,
    updateComment,
    processCommentDelete,
    errorMssg,
  };
});
