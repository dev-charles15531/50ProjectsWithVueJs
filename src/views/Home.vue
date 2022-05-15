<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 py-8 px-12 pb-5 w-2/5 border-2 border-gray-300 rounded">
        <div class="w-full mb-5">
          <h1 class="w-full text-4xl text-center text-teal-500 font-bold material-icons">account_balance</h1>
          <h4 class="w-full text-xl text-center font-mono">Sign up</h4>
        </div>
        <form>
          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">account_circle</span>
              </div>
              <input type="text" v-model="firstName" placeholder="First Name" @keyup="validateFirstName" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="getFirstNameErrMssg.length">{{getFirstNameErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="getFirstNameSuccMssg.length">{{getFirstNameSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">account_circle</span>
              </div>
              <input type="text" v-model="lastName" placeholder="Last Name" @keyup="validateLastName" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="getLastNameErrMssg.length">{{getLastNameErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="getLastNameSuccMssg.length">{{getLastNameSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">mail </span>
              </div>
              <input type="email" v-model="email" placeholder="Email Address" @keyup="validateEmail" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="getEmailErrMssg.length">{{getEmailErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="getEmailSuccMssg.length">{{getEmailSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">password</span>
              </div>
              <input type="password" v-model="password" placeholder="Password" @keyup="validatePassword" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="getPasswordErrMssg.length">{{getPasswordErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="getPasswordSuccMssg.length">{{getPasswordSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">password</span>
              </div>
              <input type="password" v-model="confirmPassword" placeholder="Confirm Password" @keyup="validateConfirmPassword" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="getConfirmPasswordErrMssg.length">{{getConfirmPasswordErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="getConfirmPasswordSuccMssg.length">{{getConfirmPasswordSuccMssg}}</p>
          </div>

          <button :disabled="canSubmit < 1" 
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

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",

      /**
       * Every input represents each object with error and success message property
       */
      firstNameMssg:
      {
        error: "", success: ""
      },
      lastNameMssg: 
      {
        error: "", success: ""
      },
      emailMssg: 
      {
        error: "", success: ""
      },
      passwordMssg:
      {
        error: "", success: ""
      },
      confirmPasswordMssg:
      {
        error: "", success: ""
      },
    }
  },

  computed: {

    /**************************************************
     * Getters for each field error and success message
     */

    getFirstNameSuccMssg() {
      return this.firstNameMssg.success
    },
    getFirstNameErrMssg() {
      return this.firstNameMssg.error
    },
    getLastNameSuccMssg() {
      return this.lastNameMssg.success
    },
    getLastNameErrMssg() {
      return this.lastNameMssg.error
    },
    getEmailSuccMssg() {
      return this.emailMssg.success
    },
    getEmailErrMssg() {
      return this.emailMssg.error
    },
    getPasswordSuccMssg() {
      return this.passwordMssg.success
    },
    getPasswordErrMssg() {
      return this.passwordMssg.error
    },
    getConfirmPasswordSuccMssg() {
      return this.confirmPasswordMssg.success
    },
    getConfirmPasswordErrMssg() {
      return this.confirmPasswordMssg.error
    },
    /***************************************************
     * 
     */

    /**
     * Determines if the form can get submitted or not.
     * Checks if any field have a validation error mssg present.
     * 
     * @return {int} 0 if error mssg absent or >=1 if present
     */
    canSubmit() {
      return (this.getConfirmPasswordSuccMssg.length && this.getPasswordSuccMssg.length && this.getEmailSuccMssg.length && this.getLastNameSuccMssg.length && this.getFirstNameSuccMssg.length)
    }
  },

  methods: {
    /**
     * Validate that the firstname consists of more than three characters
     * @param {event.target} e The triggered event target
     * 
     * @return {string} 
     */
    validateFirstName(e) {
      if(e.keyCode >= 48 && e.keyCode <= 57)
        return e.preventDefault();

      this.firstNameMssg.error = "";
      this.firstNameMssg.success = "";
      if(this.firstName.trim().length <= 3) {
        return this.firstNameMssg.error = "Your first name must be more than 3 characters"
      }
      else {
        return this.firstNameMssg.success = "First name validated"
      }
    },

    validateLastName(e) {
      if(e.keyCode >= 48 && e.keyCode <= 57)
        return e.preventDefault();

      this.lastNameMssg.error = "";
      this.lastNameMssg.success = "";
      if(this.lastName.trim().length <= 3) {
        return this.lastNameMssg.error = "Your last name must be more than 3 characters"
      }
      else {
        return this.lastNameMssg.success = "Last name validated"
      }
    },

    validateEmail() {
      this.emailMssg.error = "";
      this.emailMssg.success = "";
      let isMatch = this.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if(! isMatch) {
        return this.emailMssg.error = "Email format entered is invalid"
      }

      return this.emailMssg.success = "Email validated"
    },

    validatePassword() {
      this.passwordMssg.error = "";
      this.passwordMssg.success = "";

      let passwordValid = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{7,}))');
      this.validateConfirmPassword();

      if(passwordValid.test(this.password)) {
        return this.passwordMssg.success = "Password validated";
      }
      return this.passwordMssg.error = "Password must be more than 6 words length and must contain at least 1 alphabet, number and symbol";
    },

    validateConfirmPassword() {
      this.confirmPasswordMssg.error = "";
      this.confirmPasswordMssg.success = "";

      if(this.password === this.confirmPassword) {
        return this.confirmPasswordMssg.success = "Passwords match";
      }
      else {
        return this.confirmPasswordMssg.error = "Passwords not matching";
      }
    },

    handleSubmit() {
      let data = 'First Name: ' + this.firstName + '\n'+
                  'Last Name: ' + this.lastName + '\n'+
                  'Email: ' + this.email + '\n'+
                  'Password: ' + this.password;
      
      alert(data);
    }
  },

}
</script>