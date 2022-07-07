<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div class="w-full mb-5">
          <h1 class="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 class="w-full text-xl text-center font-mono">Login</h4>
        </div>
        <form>
          <div class="mb-5">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">mail </span>
              </div>
              <input type="email" v-model="email" placeholder="Email Address" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
          </div>

          <div class="mb-5">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">password</span>
              </div>
              <input type="password" v-model="password" placeholder="Password" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
          </div>

          <button :disabled="!canSubmit" 
          class="mt-4 bg-gradient-to-r disabled:from-gray-200 from-teal-400 via-green-300 disabled:to-stone-200 to-teal-500 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-teal-300 hover:via-green-400 hover:to-teal-400 px-5 py-2 rounded"
           @click.prevent="handleSubmit">
              <span class="text-sm font-semibold">Submit</span>
          </button>  
         </form>
      </div>
    </div>    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { userStore } from '../stores/user';
import { useRouter } from 'vue-router';

const myUserStore = userStore()

const email = ref("")
const password = ref("")
const router = useRouter()

const canSubmit = computed(() => {
  return (email.value.length > 0 && password.value.length > 0)
});

/**
 * Authenticate form data against data stored in DB
 * Alert on form authentication
 * 
 * @return {null}
 */
function handleSubmit() {
  let users = myUserStore.getExistingUsers
  const userMatch = users.filter(user => (user.email == email.value  &&  user.password == password.value))

  if(userMatch.length == 0) {
    alert("Incorrect email or password")
  }
  else {
    myUserStore.setLoginStatus(userMatch[0].id)
    router.push('/dashboard')
    
  }
}

onMounted(() => {
  myUserStore.fetchExistingUsers();
})

</script>
