<template>
  <div class="h-full w-full">
    <div class="w-full px-1 md:px-44 py-20">
      <CommentBlock
        v-for="comment in comments"
        :parent-comment-id="comment.id"
        :comment="comment"
        :current-user="userStore.getCurrentUser"
      />
      <CommentBox :current-user="userStore.getCurrentUser" />
    </div>
  </div>

  <Teleport to="body">
    <Modal />
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

// Initialize stores
const userStore = useUserStore();
const commentsStore = useCommentsStore();

const comments = ref(commentsStore.getAllComments);

/**
 * On mounted hook
 */
onMounted(() => {
  userStore.fetchCurrentUser();
});
</script>
