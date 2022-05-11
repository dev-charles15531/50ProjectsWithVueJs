<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold text-red-50">
            All Testimonials
        </nav>
        <div class="w-full flex justify-center mt-12">
            <div v-if="testimonies.length" class="w-full md:w-3/5 bg-gradient-to-r from-cyan-200 to-blue-200 p-4 border rounded">
                <div class="w-full bg-gradient-to-r from-cyan-100 to-blue-100 flex space-x-5 justify-evenly p-2">
                    <div class="text-sm md:text-base">
                        <img :src="testimonies[index].img" alt="image" class="h-24 w-24 md:h-32 md:w-32 rounded-full border border-pink-100">
                        <div class="text-center">
                            <span class="font-bold">{{testimonies[index].name}}</span>
                        </div>
                        <div class="text-center">
                            <span class="font-semibold font-mono">{{testimonies[index].occupation}}</span>
                        </div>
                    </div>

                    <div class="mt-4 md:mt-6 flex-1">
                        <div>
                            <div class="flex items-center mb-2">
                                <svg v-for="n in 5" class="w-5 h-5" :class="[n<=testimonies[index].rating? ' text-yellow-400':'text-gray-300 dark:text-gray-500']" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <q class="break-normal text-gray-700 text-xl font-sans italic hover:not-italic font-semibold">{{testimonies[index].testimony}}</q>
                        </div>
                    </div>
                </div>

                <div class="mt-4 flex justify-evenly">
                    <div><button @click="slidePrev" class="text-xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-3">&LeftArrow;</button></div>
                    <div class="inline-flex space-x-2">
                        <button class="h-3 w-3 rounded-full" v-for="indicator in 5" @click="slideTo(indicator-1)" :class="[(indicator-1)==index? 'bg-gradient-to-r from-cyan-800 to-blue-800':'bg-gradient-to-r from-cyan-500 to-blue-500']">
                        </button>
                    </div>
                    <div><button @click="slideNext" class="text-xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-3">&rightarrow;</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
                /**
                 * Static testimonies data
                 * 
                 * @var array
                 */
                testimonies: [
                    {
                        name: "Charles Paul", 
                        img: "src/assets/imgs/img1.jpg", 
                        occupation: "Web Developer", 
                        rating: 3, 
                        testimony: "I had a great time using vue js"
                    },
                    {
                        name: " Paul", 
                        img: "src/assets/imgs/img2.jpg", 
                        occupation: "Web Developer", 
                        rating: 2, 
                        testimony: "I had a great time using vue js"
                    },
                    {
                        name: "Charles ", 
                        img: "src/assets/imgs/img3.jpg", 
                        occupation: "Web Developer", 
                        rating: 4, 
                        testimony: "I had to literally rewrite my company's website. Initially, it was jquery, an now vue. I love you Evan"
                    },
                    {
                        name: " Paul", 
                        img: "src/assets/imgs/img4.jpg", 
                        occupation: "Web Developer", 
                        rating: 5, 
                        testimony: "The mind blowing thing about vue js is its steep learning curve. Believe me, if you're a good js developer, you can master vue js in just 50 days."
                    },
                    {
                        name: "Charles ", 
                        img: "src/assets/imgs/img5.jpg", 
                        occupation: "Web Developer", 
                        rating: 5, 
                        testimony: "I had a great time developing in vue js. It is fast and very scalable."
                    },
                ]
            }
        },
        mounted () {
            this.slide()
        },
        methods: {
            /**
             * This method loops the index from 0 - 5 at an interval of 7secs causing a sliding effect of the testimonials
             */
            slide() {
                setInterval(() => {
                    if(this.index == 5){
                        this.index = 0
                    }
                    else {
                        this.index++
                    } 
                }, 7000);
            },

            /**
             * This method increments the index by one or resets to 0 if index equals 5
             */
            slideNext() {
                if(this.index == 5) {
                    this.index = 0
                }
                else {
                    this.index++
                } 
            },

            /**
             * This method decrements the index by one or resets to 5 if index equals 0
             */
            slidePrev() {
                if(this.index == 0) {
                    this.index = 5
                }
                else {
                    this.index--
                } 
            },

            /**
             * This method sets the index to a particular argument value
             * 
             * @param string index The value to set index to 
             */
            slideTo(index) {
                this.index = index
            },
        }
    }
</script>