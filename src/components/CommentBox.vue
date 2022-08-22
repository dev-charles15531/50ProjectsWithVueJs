<template>
  <div class="w-full bg-[#f5f6fa] mt-5">
    <!-- VISIBLE FOR ONLY MEDIUM SCREENS UPWARDS -->
    <form
      @submit.prevent="submitNewComment()"
      class="hidden w-full md:flex items-start space-x-10 p-5 text-[16px]"
    >
      <div>
        <!-- User avatat -->
        <img :src="currentUser.image.png" alt="User Image" />
      </div>

      <div class="w-full">
        <!-- comment textarea -->
        <textarea
          v-focus
          v-model="enteredText"
          id="comment"
          cols="30"
          rows="3"
          :placeholder="placeholder"
          class="w-full p-4 rounded-md border-[1px] border-[#eaecf1] focus:border-[#67727e] focus:outline-none text-[#67727e]"
        ></textarea>
      </div>

      <div>
        <!-- submit button -->
        <input
          type="submit"
          value="send"
          class="uppercase cursor-pointer bg-[#5457b6] hover:bg-[#c3c4ef] text-white font-semibold px-8 pt-2 pb-3 rounded-md"
        />
      </div>
    </form>

    <!-- VISIBLE FOR SMALL SCREENS ONLY -->
    <form
      @submit.prevent="submitNewComment()"
      class="w-full block md:hidden p-5 text-[16px]"
    >
      <div class="w-full">
        <!-- comment textarea -->
        <textarea
          v-focus
          v-model="enteredText"
          id="comment"
          cols="30"
          rows="3"
          :placeholder="placeholder"
          class="w-full p-4 rounded-md border-[1px] border-[#eaecf1] focus:border-[#67727e] focus:outline-none text-[#67727e]"
        ></textarea>
      </div>

      <div class="flex justify-between items-center mt-3">
        <div>
          <!-- User avatar -->
          <img
            :src="currentUser.image.png"
            alt="User Image"
            class="w-10 h-10"
          />
        </div>

        <div>
          <!-- submit button -->
          <input
            type="submit"
            value="send"
            class="uppercase cursor-pointer bg-[#5457b6] hover:bg-[#c3c4ef] text-white font-semibold px-6 pt-2 pb-2 rounded-md"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
/**
 * IMPORTS
 */
import { reactive, ref, computed, watch, inject } from "vue";
import moment from "moment";
import { useCommentsStore } from "../stores/comments";

/****************************************
 * DEFINE PROPS
 ***************************************/
const props = defineProps({
  currentUser: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Add a comment...",
  },
  replyto: { type: String },
  commentId: { type: Number },
});

/****************************************
 * DEFINE EMITS
 ***************************************/
const emits = defineEmits(["commentPosted"]);

// inject parent comment id
const parentCommentId = inject("parent-comment-id", "");

/**
 * INITIALIZE STORES
 */
const commentsStore = useCommentsStore();

// get the username of the person the current user replied to(if it actully is a reply)
const replyingTo = computed(() => {
  if (props.replyto === undefined) return "";
  return props.replyto;
});

// comment/reply textarea val
const enteredText = ref(replyingTo.value);
watch(enteredText, (newEnteredText) => {
  commentData.content = replyData.content = newEnteredText;
});

// commentData
const commentData = reactive({
  content: "",
  createdAt: "",
  score: 0,
  user: props.currentUser,
});

// replyData
const replyData = reactive({
  commentId: parentCommentId,
  content: "",
  createdAt: "",
  score: 0,
  replyingTo: replyingTo.value.slice(1, -2),
  user: props.currentUser,
});

/**
 * This method submits new comment/reply
 */
const submitNewComment = () => {
  // check if its a new comment or just a reply
  // prepare the datails to get saved
  if (props.replyto === undefined) {
    // first check if comment is empty
    if (commentData.content.trim().length == 0)
      return alert("Cannot post an empty comment");

    // remove the appended username from the comment
    commentData.content = commentData.content.replace(replyingTo.value, "");
    // use the current time as createdAt field
    commentData.createdAt = moment().format("YYYYMMDD h:mm:ss a");

    commentsStore.setNewData(commentData);
    // save the comment
    commentsStore.postNewComment();

    // Empty the comment box
    enteredText.value = replyingTo.value;
  } else {
    // first check if reply is empty
    if (replyData.content.trim().length == 0)
      return alert("Cannot post an empty reply");

    // remove the appended username from the reply
    replyData.content = replyData.content.replace(replyingTo.value, "");
    // use the current time as createdAt field
    replyData.createdAt = moment().format("YYYYMMDD h:mm:ss a");

    commentsStore.setNewData(replyData);
    // save the reply
    commentsStore.postNewReply();
  }

  // emit comment posted event
  emits("commentPosted");
};
</script>
