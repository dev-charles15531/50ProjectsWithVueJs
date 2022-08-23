<template>
  <div class="h-full w-full" v-if="!commentsStore.errorMssg">
    <div class="w-full px-1 md:px-44 py-20" v-if="comments.length">
      <CommentBlock
        v-for="comment in comments"
        :parent-comment-id="comment.id"
        :comment="comment"
        :current-user="userStore.getCurrentUser"
        @show-modal="processOpenModal(comment.id)"
      />
      <CommentBox :current-user="userStore.getCurrentUser" />
    </div>
    <div
      class="w-full h-screen flex justify-center items-center font-medium text-gray-800"
      v-else
    >
      Loading comments...
    </div>
  </div>
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

  <Teleport to="body">
    <Modal v-if="isModalOpen" @hide-modal="closeModal" />
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
import { useModal } from "./composables/modal";

// Initialize stores
const userStore = useUserStore();
const commentsStore = useCommentsStore();

const comments = ref(commentsStore.getAllComments);

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
 * On mounted hook
 */
onMounted(() => {
  userStore.fetchCurrentUser();
});
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
