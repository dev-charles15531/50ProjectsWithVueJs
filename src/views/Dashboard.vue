<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div class="w-full mb-5">
          <h1 class="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 class="w-full text-xl text-center font-mono">Welcome {{myUserStore.user.first_name}} {{myUserStore.user.last_name}}  to your dashboard</h4>
        </div>
        
        <div class="w-full">
          <h3 class="text-center">You're in control of this dashboard until you login</h3>
        </div>
      </div>
    </div>    
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import { userStore } from "../stores/user";

const myUserStore = userStore()

onMounted(() => {
  myUserStore.getLoggedInUser()
})
</script>