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

<script>
import axios from "axios";
export default {
  data() {
    return {
      // Form details to implement 2-way data binding
      email: "",
      password: "",

      // Existing database users
      existingUsers: [],
    }
  },

  computed: {

    /**
     * Determines if the form can get submitted or not.
     * 
     * @return {boolean} True or False
     */
    canSubmit() {
      return (this.email.length > 0 && this.password.length > 0)
    }
  },

  methods: {
    /**
     * Authenticate form data against data stored in DB
     * Alert on form authentication
     * 
     * @return {null}
     */
    handleSubmit() {
      this.getExistingUsers();

      this.existingUsers.forEach(user => {
        if(user.email === this.email && user.password === this.password) {

          this.setLoginStatus(user.id);
        }
        else {
          alert('Incorrect email or password')
        }
      });
    },

    /**
     * Get existing users from our fake database
     * set the response data to the existinUsers array
     */
    async getExistingUsers() {
      const response = await axios.get(`http://localhost:3001/users`);

      this.existingUsers = response.data
    },

    /**
     * Set login status for correct login authentication
     * Redirects to dashboard.
     */
    async setLoginStatus(userId) {
      const response = await axios.patch(`${`http://localhost:3001/users`}/${userId}`, {
          logged_in: 1,
        });
      if(response.status >= 200 && response.status < 300)
        this.$router.push('/dashboard')
      else 
        alert('Unable to login')
    }
  },

}
</script>
