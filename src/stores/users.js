import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import CURRENT_USER_API from "../apis/currentuser";

export const useUserStore = defineStore('user', () => {
    const currentUser = reactive({
        image: {},
        username: ""
    })

    const getCurrentUser = computed(() => {
        return currentUser
    })

    const fetchCurrentUser = async () => {
        const response = await CURRENT_USER_API.get();

        currentUser.image = response.data.image
        currentUser.username = response.data.username
    }

    return {fetchCurrentUser, getCurrentUser}
})