<template>
   <div class="h-full w-full">
    <div class="w-full px-1 md:px-44 py-20">
        <CommentBlock />
        <CommentBox />
    </div>
   </div>
</template>

<script setup>
// Imports
import CommentBlock from './components/CommentBlock.vue';
import CommentBox from './components/CommentBox.vue';

</script>