<template>
  <!-- render this div if there are no errors fetching all comments -->
  <div class="h-full w-full" v-if="!commentsStore.errorMssg">
    <!-- comments loaded -->
    <div class="w-full px-1 md:px-44 py-20">
      <CommentBlock
        v-for="comment in comments"
        :parent-comment-id="comment.id"
        :comment="comment"
        :current-user="userStore.getCurrentUser"
        v-if="comments.length"
        @show-modal="processOpenModal(comment.id)"
      />
      <!-- comments loading -->
      <div
        class="w-full h-screen flex justify-center items-center font-medium text-gray-800"
        v-else
      >
        {{ pageInfo }}
      </div>
      <CommentBox :current-user="userStore.getCurrentUser" />
    </div>
  </div>

  <!-- if there are errors fetching comments -->
  <div class="w-full h-screen flex justify-center items-center p-5" v-else>
    <div
      class="flex justify-center items-center h-48 w-full md:w-1/3 rounded-md bg-red-500 p-5"
    >
      <div class="text-sm font-medium text-white">
        <div align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p class="mt-3">
          {{ commentsStore.errorMssg }}
        </p>
      </div>
    </div>
  </div>

  <!-- teleport modal to body if its showing -->
  <Teleport to="body">
    <Modal v-if="isModalOpen" @hide-modal="closeModal" />
  </Teleport>

  <!-- teleport modal to body if its showing -->
  <Teleport to="body">
    <Alert
      v-if="commentsStore.appMssg.hasOwnProperty('type')"
      :type="commentsStore.appMssg.type"
      :message="commentsStore.appMssg.message"
    />
  </Teleport>
</template>

<script setup>
// Imports
import { onMounted, ref } from "vue";
import { useUserStore } from "./stores/users";
import { useCommentsStore } from "./stores/comments";
import CommentBlock from "./components/CommentBlock.vue";
import CommentBox from "./components/CommentBox.vue";
import Modal from "./components/Modal.vue";
import Alert from "./components/Alert.vue";
import { useModal } from "./composables/modal";

// Initialize stores
const userStore = useUserStore();
const commentsStore = useCommentsStore();

const comments = ref(commentsStore.getAllComments);
const pageInfo = ref("");

// modal states and funcs
const { isModalOpen, openModal, closeModal } = useModal();
const processOpenModal = (id) => {
  // populate data to use during delete
  let data = {
    commentId: id,
  };
  commentsStore.setToDeleteData(data);

  // open modal
  openModal();
};

/**
 * show if comments aren't available or comments are loading
 */
const showPageInfo = () => {
  pageInfo.value = "Loading comments...";

  setTimeout(() => {
    pageInfo.value = "No comment made, be the first to comment :)";
  }, 4000);
};

/**
 * On mounted hook
 */
onMounted(() => {
  userStore.fetchCurrentUser();

  showPageInfo();
});
</script>
