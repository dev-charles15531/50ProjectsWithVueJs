import {defineStore} from 'pinia'
import {getAuth, signOut} from "firebase/auth"

export const userStore = defineStore('user', {
    state: () => {
        return {
            displayName: "",
            email: "",
            loggedIn: 0
        }
    },
    getters: {
        getLoginStatus(state) {
            return (state.displayName.length > 0 && state.email.length > 0 && state.loggedIn == 1)? true : false
        },
        getDisplayName(state) {
            return state.displayName
        },
        getEmail(state) {
            return state.email
        }
    },
    actions: {
        setDisplayName(displayName) {
            this.displayName = displayName
        },
        setEmail(email) {
            this.email = email
        },
        setLoggedIn(val) {
            this.loggedIn = val
        },
        logOutUser() {
            const auth = getAuth()
            signOut(auth).then(() => {
                this.displayName = ""
                this.email = ""
                this.loggedIn = 0
            }).catch((error) => {
                alert('Unable to logout')
            })
        }
    }
})