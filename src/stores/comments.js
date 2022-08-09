import { defineStore } from "pinia";
import { computed, ref } from "vue";
import COMMENTS_API from "../apis/comments";

export const useCommentsStore = defineStore('comments', () => {
    const comments = ref([])

    const getComments = computed(() => {
        return comments
    })

    const fetchComments = async () => {
        const response = await COMMENTS_API.get();

        response.data.forEach((comment) => {
            comments.value.push(comment);
        });
    }

    return {fetchComments, getComments}
})