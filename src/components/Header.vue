<template>
    <div class="w-full">
        <nav class="w-full px-10 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                <router-link to="/">User Authentication</router-link>
            </div>

            <div v-if="myUserStore.isLoggedIn === 0" class="flex space-x-3 text-gray-200 font-semibold">
                <router-link class="real" to="/login">Login</router-link>
                <router-link class="real" to="/signup">Sign Up</router-link>
            </div>
            <div v-else class="flex space-x-3 text-gray-200 font-semibold">
                <a href="#" @click.prevent="logout()">Logout</a>
            </div>
        </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import {onMounted } from 'vue';
import { userStore } from '../stores/user.js';
import { useRouter } from 'vue-router';
import axios from 'axios';

const myUserStore = userStore()
const router = useRouter()

/**
 * Logout logged in user
 * Redirects to login page.
 */
async function logout() {
    const response = await axios.patch(`${`http://localhost:3001/users`}/${myUserStore.userId}`, {
        logged_in: 0,
    });
    if(response.status >= 200 && response.status < 300) {
        myUserStore.user = ""
        myUserStore.userId = 0
        router.push('/login')
    }
    else 
        alert('Unable to logout')
}

onMounted(() => {
    myUserStore.getLoggedInUser()
})

</script>

<style scoped>
.router-link-exact-active.real {
    font-weight: 800;
    color: darkgreen;
}
</style>