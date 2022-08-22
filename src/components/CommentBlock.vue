<template>
  <div class="w-full bg-[#f5f6fa] mt-5">
    <div
      class="flex flex-col-reverse lg:flex-row items-start space-x-0 lg:space-x-10 p-3 lg:p-5 text-xs lg:text-[16px]"
    >
      <!-- ========================================================== -->
      <!-- display flex with reply icon for small screens downwards   -->
      <div
        class="w-full lg:w-auto pt-5 lg:pt-0 flex justify-between items-center lg:block"
      >
        <div
          class="flex flex-row lg:flex-col space-x-5 lg:space-x-0 lg:space-y-4 items-center bg-[#eaecf1] px-5 py-2 lg:px-3 lg:py-2 rounded-xl lg:rounded-md"
        >
          <!-- upvote icon -->
          <div class="text-[#C5C6EF] hover:text-[#5457b6] cursor-pointer">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <!-- vote count -->
          <div class="text-[#5457b6] font-medium">{{ comment.score }}</div>
          <!-- downvote icon -->
          <div class="text-[#C5C6EF] hover:text-[#5457b6] cursor-pointer">
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div class="block lg:hidden">
          <div
            v-if="currentUser.username === comment.user.username"
            class="flex space-x-3 items-center text-xs lg:text-sm font-medium"
          >
            <div
              class="flex space-x-1 items-center cursor-pointer text-[#ed6468] hover:text-[#ffb8bb]"
              @click="handleDelete"
            >
              <div>
                <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>Delete</div>
            </div>
            <div>
              <div
                v-if="!isEditBoxShowing"
                @click="isEditBoxShowing = true"
                class="flex space-x-1 items-center cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
              >
                <div>
                  <svg
                    width="13"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>Edit</div>
              </div>
              <div
                v-else
                @click="isEditBoxShowing = false"
                class="flex items-center space-x-1 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 class="font-bold">cancel</h3>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              v-if="!isReplySectionShowing"
              class="flex items-center space-x-2 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
              @click="showReplySection()"
            >
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                />
              </svg>
              <h3 class="font-bold">Reply</h3>
            </div>

            <div
              v-else
              class="flex items-center space-x-1 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
              @click="isReplySectionShowing = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <h3 class="font-bold">cancel</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- ========================================================== -->

      <div class="w-full">
        <div class="flex justify-between items-center">
          <div
            class="flex justify-start items-center space-x-2 lg:space-x-3 text-gray-900"
          >
            <img
              :src="comment.user.image.png"
              alt="User Image"
              class="h-8 lg:h-10 w-8 lg:w-10"
            />

            <div>
              <h4 class="font-medium">{{ comment.user.username }}</h4>
            </div>
            <!-- show if comment belongs to user -->
            <div
              v-if="currentUser.username === comment.user.username"
              class="bg-[#5457b6] text-white text-xs lg:text-sm px-2 py-1 lg:py-0 lg:pb-1 rounded-sm flex justify-center items-center"
            >
              <h4>you</h4>
            </div>

            <!-- Timestamp text only visible for medium screens upwards screens -->
            <div class="text-[#67727e] hidden lg:block">
              <h4 class="font-normal">{{ dateCreated }}</h4>
            </div>
          </div>

          <!-- Timestamp text only visible for small screens -->
          <div class="lg:hidden text-[#67727e]">
            <h4 class="font-normal">{{ dateCreated }}</h4>
          </div>

          <!-- ================================================================= -->
          <!-- Reply or action buttons only visible from medium screen upwards   -->
          <div class="hidden lg:block">
            <div
              v-if="currentUser.username === comment.user.username"
              class="flex space-x-3 items-center text-xs lg:text-sm font-medium"
            >
              <div
                class="flex space-x-1 items-center cursor-pointer text-[#ed6468] hover:text-[#ffb8bb]"
                @click="handleDelete"
              >
                <div>
                  <svg
                    width="13"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>Delete</div>
              </div>
              <div>
                <div
                  v-if="!isEditBoxShowing"
                  @click="isEditBoxShowing = true"
                  class="flex space-x-1 items-center cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
                >
                  <div>
                    <svg
                      width="13"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>Edit</div>
                </div>
                <div
                  v-else
                  @click="isEditBoxShowing = false"
                  class="flex items-center space-x-1 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3 class="font-bold">cancel</h3>
                </div>
              </div>
            </div>
            <div v-else>
              <div
                v-if="!isReplySectionShowing"
                class="flex items-center space-x-2 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
                @click="showReplySection()"
              >
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>
                <h3 class="font-bold">Reply</h3>
              </div>

              <div
                v-else
                class="flex items-center space-x-1 cursor-pointer text-[#5457b6] hover:text-[#c3c4ef]"
                @click="isReplySectionShowing = false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h3 class="font-bold">cancel</h3>
              </div>
            </div>
          </div>
          <!-- ================================================================= -->
        </div>
        <!-- Comment text section  -->
        <div class="mt-4 text-[#67727e]">
          <!-- comment edit [show or hide only when the user toggle state by clicking the edit button] -->
          <div v-if="isEditBoxShowing" class="w-full">
            <!-- comment edit textarea -->
            <div>
              <textarea
                v-focus
                cols="30"
                rows="3"
                class="w-full p-2 lg:p-4 rounded-md border-[1px] border-[#eaecf1] focus:border-[#67727e] focus:outline-none text-[#67727e]"
                v-model="editContent"
              ></textarea>
            </div>
            <!-- submit edited text button -->
            <div class="flex justify-end mt-3">
              <input
                type="submit"
                value="update"
                class="uppercase cursor-pointer bg-[#5457b6] hover:bg-[#c3c4ef] text-white font-semibold px-4 pt-3 pb-3 rounded-md"
                @click.prevent="handleEditSubmit"
              />
            </div>
          </div>

          <!-- comment text [show or hide only when the user toggle state by clicking the edit button] -->
          <p v-if="!isEditBoxShowing" class="font-normal">
            <span
              v-if="comment.replyingTo"
              class="text-[#5457b6] font-semibold"
            >
              {{ blockFormattedReplyTo }}
            </span>
            {{ comment.content }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- append reply above other replies or just below comment(if no reply is available) -->
  <CommentBox
    v-if="isReplySectionShowing == true"
    :current-user="currentUser"
    :placeholder="replyPlaceholder"
    :replyto="textareaFormattedReplyTo"
    @comment-posted="hideReplySection()"
  />

  <!-- If replies are available for this comment, show them below in the same component -->
  <div
    v-if="typeof comment.replies !== 'undefined'"
    class="pl-[20px] lg:pl-[40px] ml-0 lg:ml-10 border-l-[0.5px] border-l-[#c3c4ef]"
  >
    <!-- Recursion of current component -->
    <CommentBlock
      v-for="reply in comment.replies"
      :parent-comment-id="comment.id"
      :comment="reply"
      :current-user="currentUser"
      @show-modal="openModal"
    />
  </div>

  <Teleport to="body">
    <Modal v-if="isModalOpen" @hide-modal="hideModal" />
  </Teleport>
</template>

<script setup>
/****************************************
 * IMPORTS
 ***************************************/
import { computed, ref, provide } from "vue";
import CommentBox from "./CommentBox.vue";
import Modal from "./Modal.vue";
import { useCommentsStore } from "../stores/comments";
import moment from "moment";
import { useModal } from "../composables/modal";

/****************************************
 * define props
 ***************************************/
const props = defineProps({
  currentUser: {
    type: Object,
    required: true,
  },
  comment: {
    type: Object,
    required: true,
  },
  parentCommentId: {
    type: Number,
  },
});

// Initialize stores -----------------------------------------//
const commentsStore = useCommentsStore();
//------------------------------------------------------------//

/****************************************
 * DEFINE EMITS
 ***************************************/
const emit = defineEmits(["showModal"]);

// provide the parent comment id to be accessible in all nested components
provide("parent-comment-id", props.parentCommentId);

// format comment created date
const dateCreated = ref(
  moment(props.comment.createdAt, "YYYYMMDD h:mm:ss a").fromNow()
);

// comment reply textarea placeholder
const replyPlaceholder = ref("Add a reply...");

// append the username of the person the current user is replying to appended and prepended with '@' and ',' respectively
// this is only rendered in comment or reply textarea
const textareaFormattedReplyTo = computed(() => {
  if (isReplySectionShowing.value)
    return "@" + props.comment.user.username + ", ";
  else return "";
});
// append the username of the person the current user replied to(if it actully is a reply) appended and prepended with '@' and ',' respectively
// this is only rendered in comment or reply block
const blockFormattedReplyTo = computed(() => {
  if (props.comment.hasOwnProperty("replyingTo"))
    return "@" + props.comment.replyingTo + ", ";
  else return "";
});

// hold the boolean value if the reply box/section is showing or not
const isReplySectionShowing = ref(false);
/**
 * method to show the reply section
 */
const showReplySection = () => {
  isReplySectionShowing.value = true;
};
/**
 * method to hide the reply section
 */
const hideReplySection = () => {
  isReplySectionShowing.value = false;
};

// hold the boolean value if the reply/comment edit box is showing or not
const isEditBoxShowing = ref(false);
/**
 * method to hide the edit box
 */
const hideEditBox = () => {
  isEditBoxShowing.value = false;
};

// The comment/reply content to edit
const editContent = ref(blockFormattedReplyTo.value + props.comment.content);

/**
 * This method handles submission of comment/reply edit
 */
const handleEditSubmit = async () => {
  // remove prepended username reference
  editContent.value = editContent.value.replace(
    blockFormattedReplyTo.value,
    ""
  );

  // Comment id to edit
  let commentId;
  // Comment data to edit
  let commentData;

  // check if its a comment or a reply
  if (props.comment.hasOwnProperty("replyingTo")) {
    //---> its a reply <---//

    // get the reply id
    let replyId = props.comment.id;

    // get the comment whose reply we want to edit
    let commentToEditReply = await commentsStore.fetchSingleComment(
      props.parentCommentId
    );
    // get all replies of the above comment
    let allReplies = commentToEditReply.replies;

    // Find index of the specific reply to edit
    // edit the content at that index
    let replyIndex = allReplies.findIndex((reply) => reply.id == replyId);
    allReplies[replyIndex].content = editContent.value;

    // reassign the replies
    commentToEditReply.replies = allReplies;

    // assign comment id and data
    commentId = props.parentCommentId;
    commentData = commentToEditReply;
  } else {
    //---> its a comment <---//

    let editedData = props.comment;
    editedData.content = editContent.value;

    // assign comment id and data
    commentId = editedData.id;
    commentData = editedData;
  }

  // Edit the comment
  editComment(commentId, commentData);
};

/**
 * method for updating/editing an already posted comment
 * @param {int} id The comment id to edit
 * @param {object} data the new comment object
 */
const editComment = (id, data) => {
  commentsStore.updateComment(id, data).finally(hideEditBox());
};

// modal states and funcs
const { isModalOpen, openModal, hideModal } = useModal();

/**
 * when delete button is clicked, show the modal
 */
const handleDelete = () => {
  // emit show modal event
  emit("showModal");
};
</script>
