import {defineStore} from 'pinia';
import { useRouter } from 'vue-router';
import axios from "axios";

export const userStore = defineStore('user', {
    state: () => {
        return {
            user: "",
            userId: 0,
            userEmail: "",
            userPassword: "",
            loginStatusresponse: false,
            
            // Existing database users
            existingUsers: [],
        }
    },
    getters: {
        isLoggedIn() {
            return this.userId
        },
        getExistingUsers() {
            return this.existingUsers;
        },
        getLoginStatusResponse() {
            return this.loginStatusresponse;
        }
    },
    actions: {

        /**
         * Fetches existing users from our fake database
         * set the response data to the existinUsers array
         */
        async fetchExistingUsers() {
            const response = await axios.get(`http://localhost:3001/users`);
            console.log(response.data);
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
                this.loginStatusresponse = true
        },

        /**
         * Get logged in user from our fake database
         * set the response data to the users object
         */
         async getLoggedInUser() {
            const response = await axios.get(`http://localhost:3001/users`);

            let existingUsers = response.data

            existingUsers.forEach(user => {
                if(user.logged_in == 1) {
                    this.user = user;
                    this.userId = user.id;
                }
            });
        },
    }

})