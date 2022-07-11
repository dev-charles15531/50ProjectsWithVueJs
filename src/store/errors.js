import {defineStore} from 'pinia'

export const errorStore = defineStore('error', {
    state: () => {
        return {
            mssg: ""
        }
    },
    getters: {
        getMssg() {
            return this.mssg
        }
    },
    actions: {
        setMssg(mssg) {
            this.mssg = mssg
        }
    }
})