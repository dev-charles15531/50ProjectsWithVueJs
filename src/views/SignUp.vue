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
              <input type="text" v-model="messages.firstName" placeholder="First Name" @keyup="validateFirstName" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="messages.getFirstNameErrMssg.length">{{messages.getFirstNameErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="messages.getFirstNameSuccMssg.length">{{messages.getFirstNameSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">account_circle</span>
              </div>
              <input type="text" v-model="messages.lastName" placeholder="Last Name" @keyup="validateLastName" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="messages.getLastNameErrMssg.length">{{messages.getLastNameErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="messages.getLastNameSuccMssg.length">{{messages.getLastNameSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">mail </span>
              </div>
              <input type="email" name="email" v-model="messages.email" placeholder="Email Address" @keyup="validateEmail" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="messages.getEmailErrMssg.length">{{messages.getEmailErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="messages.getEmailSuccMssg.length">{{messages.getEmailSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">password</span>
              </div>
              <input type="password" v-model="messages.password" placeholder="Password" @keyup="validatePassword" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="messages.getPasswordErrMssg.length">{{messages.getPasswordErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="messages.getPasswordSuccMssg.length">{{messages.getPasswordSuccMssg}}</p>
          </div>

          <div class="mb-4">
            <div class="my-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <span class="text-gray-500 material-icons">password</span>
              </div>
              <input type="password" v-model="messages.confirmPassword" placeholder="Confirm Password" @keyup="validateConfirmPassword" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100">
            </div>
            <p class="text-sm text-red-600 pl-1" v-if="messages.getConfirmPasswordErrMssg.length">{{messages.getConfirmPasswordErrMssg}}</p>
            <p class="text-sm text-green-600 pl-1" v-else-if="messages.getConfirmPasswordSuccMssg.length">{{messages.getConfirmPasswordSuccMssg}}</p>
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

<script setup>
//Import the required methods
import {ref, reactive, computed} from 'vue'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { useRouter } from "vue-router";


  const router = useRouter()

// Form details to implement 2-way data binding
  const firstName = ref("")
  const lastName = ref("")
  const email = ref("")
  const password = ref("")
  const confirmPassword = ref("")

  
  const messages = reactive({
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


    /**************************************************
     * Getters for each field error and success message
     */
    getFirstNameSuccMssg : computed(() => {
      return messages.firstNameMssg.success
    }),
    getFirstNameErrMssg : computed(() => {
      return messages.firstNameMssg.error
    }),
    getLastNameSuccMssg : computed(() => {
      return messages.lastNameMssg.success
    }),
    getLastNameErrMssg : computed(() => {
      return messages.lastNameMssg.error
    }),
    getEmailSuccMssg : computed(() => {
      return messages.emailMssg.success
    }),
    getEmailErrMssg : computed(() => {
      return messages.emailMssg.error
    }),
    getPasswordSuccMssg : computed(() => {
      return messages.passwordMssg.success
    }),
    getPasswordErrMssg : computed(() => {
      return messages.passwordMssg.error
    }),
    getConfirmPasswordSuccMssg : computed(() => {
      return messages.confirmPasswordMssg.success
    }),
    getConfirmPasswordErrMssg : computed(() => {
      return messages.confirmPasswordMssg.error
    })
  })

  /**
   * Determines if the form can get submitted or not.
   * Checks if any field have a validation error mssg present.
   * 
   * @return {int} 0 if error mssg absent or >=1 if present
   */
  const canSubmit = computed(() => {
    return (messages.getConfirmPasswordSuccMssg.length && messages.getPasswordSuccMssg.length && messages.getEmailSuccMssg.length && messages.getLastNameSuccMssg.length && messages.getFirstNameSuccMssg.length)
  })

  /**
   * Validate that the firstname consists of more than three characters
   * @param {event.target} e The triggered event target
   * 
   * @return {string} The validation error or success message
   */
  function validateFirstName(e) {
    // Disable numeric input
    if(e.keyCode >= 48 && e.keyCode <= 57)
      return e.preventDefault();

    messages.firstNameMssg.error = "";
    messages.firstNameMssg.success = "";
    if(messages.firstName.trim().length <= 3) {
      return messages.firstNameMssg.error = "Your first name must be more than 3 characters"
    }
    else {
      return messages.firstNameMssg.success = "First name validated"
    }
  }

  /**
   * Validate that the firstname consists of more than three characters
   * @param {event.target} e The triggered event target
   * 
   * @return {string} The validation error or success message
   */
  function validateLastName(e) {
    // Disable numeric input
    if(e.keyCode >= 48 && e.keyCode <= 57)
      return e.preventDefault();

    messages.lastNameMssg.error = "";
    messages.lastNameMssg.success = "";
    if(messages.lastName.trim().length <= 3) {
      return messages.lastNameMssg.error = "Your last name must be more than 3 characters"
    }
    else {
      return messages.lastNameMssg.success = "Last name validated"
    }
  }

  /**
   * Validate that the email is in its correct format
   * 
   * @return {string} The validation error or success message
   */
  function validateEmail() {
    messages.emailMssg.error = "";
    messages.emailMssg.success = "";

    // Validate with Regex
    let isMatch = messages.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if(! isMatch) {
      return messages.emailMssg.error = "Email format entered is invalid"
    }

    return messages.emailMssg.success = "Email validated"
  }

  /**
   * Validate that the passord strength is above average
   * 
   * @return {string} The validation error or success message
   */
  function validatePassword() {
    messages.passwordMssg.error = "";
    messages.passwordMssg.success = "";

    /**
     * validate with regex that the password:
     * Is greater than 6 words length
     * Contains at least an alphabet
     * Contains at least a number
     * Contains at least a symbol
     */
    let passwordValid = new RegExp('((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{7,}))');
    validateConfirmPassword();

    if(passwordValid.test(messages.password)) {
      return messages.passwordMssg.success = "Password validated";
    }
    return messages.passwordMssg.error = "Password must be more than 6 words length and must contain at least 1 alphabet, number and symbol";
  }

  /**
   * Validate that the confirmed password value is exactly same as password value
   *
   * @return {string} The validation error or success message
   */
  function validateConfirmPassword() {
    messages.confirmPasswordMssg.error = "";
    messages.confirmPasswordMssg.success = "";

    if(messages.password === messages.confirmPassword) {
      return messages.confirmPasswordMssg.success = "Passwords match";
    }
    else {
      return messages.confirmPasswordMssg.error = "Passwords not matching";
    }
  }
  
  /**
   * Register user if all validation passes
   * save to firebase
   * 
   * @return {null}
   */
  async function handleSubmit() {
    if(canSubmit) {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, messages.email, messages.password)
      .then((userCredential) => {
        if(userCredential) {
          updateProfile(auth.currentUser, {
            email: messages.email,
            displayName: messages.firstName + ' ' + messages.lastName,
          })
        }
        // Signed in 
        const user = userCredential.user;
        // ... Alert on successfull signup
        alert('User created successfully')
        router.push('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // .. Alert on failed signup
        alert(errorCode + "\n" + errorMessage)
      });
    }
  }

</script>