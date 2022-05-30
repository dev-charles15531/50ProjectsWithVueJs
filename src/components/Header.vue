<template>
    <div class="w-full">
        <nav class="w-full px-10 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                <router-link to="/">User Authentication</router-link>
            </div>

            <div v-if="isLoggedIn === 0" class="flex space-x-3 text-gray-200 font-semibold">
                <router-link class="real" to="/login">Login</router-link>
                <router-link class="real" to="/signup">Sign Up</router-link>
            </div>
            <div v-else class="flex space-x-3 text-gray-200 font-semibold">
                <a href="#" @click.prevent="logout">Logout</a>
            </div>
        </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import {getAuth} from "firebase/auth";
export default {
    data() {
        return {
            userId: 0
        }
    },

    computed: {
        isLoggedIn() {
            return this.userId
        }
    },

     methods: {
        /**
         * Get logged in user status from firebase
         * set userId = 0 if user is not loggedin and 1 if user is logged in
         */
        async getLoggedInUser() {
            const auth = getAuth()
            
        },

        /**
         * Logout logged in user
         * Redirects to login page.
         */
        async logout() {
            
        },
    
    },

    mounted() {
        this.getLoggedInUser();
    },
}
</script>

<style scoped>
.router-link-exact-active.real {
    font-weight: 800;
    color: darkgreen;
}
</style>