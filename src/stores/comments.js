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
     * Sets a new comment/reply to be posted or edited
     */
    const setNewData = (comment) => {
        newData.value = comment
    }

    /**
     * Posts new comment to mock db
     */
    const postNewComments = async () => {
        try {
            const response = await COMMENTS_API.post("/", newData.value);

            // add new comment to allComments array
            allComments.value.push(newData.value);

            // empty the newData object
            newData.value = {}
        } 
        catch (error) {
            console.error(error);
        }
    }

    return {fetchAllComments, getAllComments, setNewData, postNewComments}
})