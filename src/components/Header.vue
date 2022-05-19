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
import axios from "axios";
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
         * Get logged in user from our fake database
         * set the response data to the users object
         */
        async getLoggedInUser() {
            const response = await axios.get(`http://localhost:3001/users`);

            let existingUsers = response.data

            existingUsers.forEach(user => {
                if(user.logged_in == 1) {
                this.userId = user.id;
                }
            });
        },

        /**
         * Logout logged in user
         * Redirects to login page.
         */
        async logout() {
            const response = await axios.patch(`${`http://localhost:3001/users`}/${this.userId}`, {
                logged_in: 0,
                });
            if(response.status >= 200 && response.status < 300) {
                this.userId = 0
                this.$router.push('/login')
            }
            else 
                alert('Unable to logout')
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