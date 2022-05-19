<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div class="w-full mb-5">
          <h1 class="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 class="w-full text-xl text-center font-mono">Welcome {{user.first_name}} {{user.last_name}}  to your dashboard</h4>
        </div>
        
        <div class="w-full">
          <h3 class="text-center">You're in control of this dashboard until you login</h3>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {}
    }
  },

  methods: {
    /**
     * Get logged in user from our fake database
     * set the response data to the users object
     */
    async getExistingUsers() {
      const response = await axios.get(`http://localhost:3001/users`);

      let existingUsers = response.data

      existingUsers.forEach(user => {
        if(user.logged_in == 1) {
          this.user = user;
        }
      });
    },
  },

  mounted() {
    this.getExistingUsers();
  }
}
</script>