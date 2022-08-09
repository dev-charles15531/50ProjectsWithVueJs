<template>
   <div class="h-full w-full">
    <div class="w-full px-1 md:px-44 py-20">
        <CommentBlock :current-user="userStore.getCurrentUser" v-for="comment in comments" :comment="comment" />
        <CommentBox :current-user="userStore.getCurrentUser"/>
    </div>
   </div>
</template>

<script setup>
// Imports
import { onMounted, reactive, ref } from 'vue';
import { useUserStore } from "./stores/users";
import { useCommentsStore } from "./stores/comments";
import CommentBlock from './components/CommentBlock.vue';
import CommentBox from './components/CommentBox.vue';

// Initialize stores
const userStore = useUserStore()
const commentsStore = useCommentsStore()

const comments = ref(commentsStore.getComments)

/**
 * On mounted hook
 */
onMounted(() => {
    userStore.fetchCurrentUser()
    commentsStore.fetchComments()
})
</script>