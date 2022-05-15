<template>
    <div>
        <div class="w-full flex justify-center mt-12">
            <div class="bg-teal-50 w-3/5 border rounded flex justify-center px-12">
                <div class="my-5 w-full ">
                    <div class="py-2 px-8 bg-gradient-to-r from-red-500 via-red-300 to-red-600 border rounded text-gray-700 flex justify-between" v-if="errMssg.length > 1">
                        <h3>{{errMssg}}</h3>
                        <h6 class="text-white cursor-pointer font-bold text-lg">&times</h6>
                    </div>
                    <div class="py-2 px-8 bg-gradient-to-r from-green-500 via-teal-300 to-green-600 border rounded text-gray-700 flex justify-between" v-else-if="succMssg.length > 1">
                        <h3>{{succMssg}}</h3>
                        <h6 class="text-white cursor-pointer font-bold text-lg">&times</h6>
                    </div>
                    <form class="mt-5" method="post">
                        <input class="h-11 w-full font-semibold font-serif border rounded p-4 focus:outline-green-100" v-model="title" placeholder="Enter note title">
                        
                        <textarea class="mt-4 h-40 w-full font-serif border rounded p-4 focus:outline-green-100" v-model="descr" placeholder="Enter note description"></textarea>
                        
                        <button class="mt-4 bg-gradient-to-r from-teal-400 via-green-300 to-teal-500 hover:bg-gradient-to-r hover:from-teal-300 hover:via-green-400 hover:to-teal-400 px-5 py-2 rounded" @click.prevent="addNote">
                            <span class="text-sm font-semibold">Add</span>
                        </button>  
                    </form>
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
                title: "",
                descr: "",
                errMssg: "",
                succMssg: "",
                timeout: ""
            }
        },

        methods: {
            /**
             * Add a new note if inputs are validated using the HTTP POST api call(JSN Server)
             * Set success message on success.
             */
            async addNote() {
                clearTimeout(this.timeout);
                if(this.sanitizeInput(this.title, this.descr) == true) {
                    const response = await axios.post(`http://localhost:3001/notes`, {
                        title: this.title,
                        description: this.descr,
                        dateCreated: new Date()
                        });

                        if(response.status >= 200 && response.status < 300) {
                            this.succMssg = "Note added successfully";
                            this.timeout = setTimeout(() => {
                                this.succMssg = "";
                            }, 3000);
                        }
                        this.title = "";
                        this.descr = "";
                        this.errMssg = "";
                }
            },

            /**
             * Validates that this method parameters are not empty and set error mssg if they are
             * @param {string} title The note title field value
             * @param {string} descr The note description field value
             * 
             * @return {boolean} True on validation success or False on failure
             */
            sanitizeInput(title, descr) {
                let titleLength = title.trim().length;
                let descrLength = descr.trim().length;

                if(titleLength === 0 || descrLength === 0) {
                    this.errMssg = 'Both fields must be filled';
                    this.timeout = setTimeout(() => {
                        this.errMssg = "";
                    }, 3000);
                    return false;
                }

                return true;
            }
        },
    }
</script>