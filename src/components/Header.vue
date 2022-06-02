<template>
    <div class="w-full">
        <nav class="w-full px-10 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                <router-link to="/">User Authentication</router-link>
            </div>

            <div v-if="! myUserStore.getLoginStatus" class="flex space-x-3 text-gray-200 font-semibold">
                <router-link class="real" to="/login">Login</router-link>
                <router-link class="real" to="/signup">Sign Up</router-link>
            </div>
            <div v-else class="flex space-x-3 text-gray-200 font-semibold">
                <a href="#" @click.prevent="logOut()">Logout</a>
            </div>
        </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {userStore} from "../store/users"
import { useRouter } from "vue-router";

const myUserStore = userStore()
const router = useRouter()

const logOut = () => {
    myUserStore.logOutUser()

    router.push('/login')
}

</script>

<style scoped>
.router-link-exact-active.real {
    font-weight: 800;
    color: darkgreen;
}
</style>