<template>
  <div class="h-full w-full">
    <div class="w-full px-1 md:px-44 py-20">
      <CommentBlock
        v-for="comment in comments"
        :parent-comment-id="comment.id"
        :comment="comment"
        :current-user="userStore.getCurrentUser"
        @show-modal="processOpenModal(comment.id)"
      />
      <CommentBox :current-user="userStore.getCurrentUser" />
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
