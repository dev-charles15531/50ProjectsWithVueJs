import { defineStore } from "pinia";
import { computed, ref } from "vue";
import COMMENTS_API from "../apis/comments";

export const useCommentsStore = defineStore('comments', () => {
    // All comments
    const allComments = ref([])
    // New comment/reply data to add or update 
    const newData = ref({})


    /**
     * Computed method to get all comments
     */
    const getAllComments = computed(() => {
        // first fetch all the comments from our mock db
        fetchAllComments()

        // return all that was fetched
        return allComments
    })

    /**
     * Fetch all coments from our mock db
     */
    const fetchAllComments = async () => {
        try {
            const response = await COMMENTS_API.get();

            response.data.forEach((comment) => {
                allComments.value.push(comment);
            });
        } 
        catch (error) {
            console.error(error);
        }
    }

    /**
     * Fetches a single comment by id from mock database
     * @param {int} id The comment id to fetch
     * @returns The fetched comment
     */
    const fetchSingleComment = async (id) => {
        try {
            const response = await COMMENTS_API.get('/'+id);

            return response.data
        } 
        catch (error) {
            console.error(error);
        }
    }

    const updateComment = async (id, data) => {
        try {
            COMMENTS_API.put("/"+id, data);

            //Find index of specific object using findIndex method.    
            let objIndex = allComments.value.findIndex((obj => obj.id == id));
            allComments.value[objIndex].replies.push(data)

            // empty the newData object
            newData.value = {}
        } 
        catch (error) {
            console.error(error);
        }
    }

    /**
     * Sets a new comment/reply to be posted or edited
     */
    const setNewData = (comment) => {
        newData.value = comment
    }

    /**
     * Posts new comment to mock db
     */
    const postNewComment = async () => {
        try {
            COMMENTS_API.post("/", newData.value);

            // add new comment to allComments array
            allComments.value.push(newData.value);

            // empty the newData object
            newData.value = {}
        } 
        catch (error) {
            console.error(error);
        }
    }

    /**
     * Posts new reply to comment in mock db
     */
     const postNewReply = async () => {
        const idOfCommentToReplyOn = newData.value.commentId

        // get the comment to reply on
        const commentToReplyOn = await fetchSingleComment(idOfCommentToReplyOn)

        if(commentToReplyOn.replies.length >= 1) {
            let repliesLength = commentToReplyOn.replies.length
            let lastReply = commentToReplyOn.replies[repliesLength - 1]
            let lastReplyId = lastReply.id
            newData.value.id = lastReplyId + 1
        }
        else {
            newData.value.id = 1
        }

        delete newData.value.commentId
        commentToReplyOn.replies.push(newData.value)

        // update the comment with new reply
        updateComment(idOfCommentToReplyOn, commentToReplyOn)
    }

    return {fetchAllComments, getAllComments, setNewData, postNewComment, postNewReply}
})