<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold text-red-50">
            All Testimonials
        </nav>
        <div class="w-full flex justify-center mt-12">
            <div v-if="testimonies.length" class="w-full md:w-3/5 bg-gradient-to-r from-cyan-200 to-blue-200 p-4 border rounded">
                <div class="w-full bg-blue-100 flex space-x-5 justify-evenly p-2">
                    <div class="text-sm md:text-base">
                        <img :src="testimonies[index].img" alt="image" class="h-24 w-24 md:h-32 md:w-32 rounded-full border border-pink-100">
                        <div class="text-center">
                            <span class="font-bold">{{testimonies[index].name}}</span>
                        </div>
                        <div class="text-center">
                            <span class="font-semibold font-mono">{{testimonies[index].occupation}}</span>
                        </div>
                    </div>

                    <div class="mt-4 md:mt-6">
                        <div>
                            Rating
                        </div>
                        <div>
                            <q class="text-black text-xl font-sans italic hover:not-italic font-semibold">{{testimonies[index].testimony}}</q>
                        </div>
                    </div>
                </div>

                <div class="mt-4 flex justify-evenly">
                    <div><button @click="slidePrev" class="text-xl font-bold bg-red-400 px-3">&LeftArrow;</button></div>
                    <div class="inline-flex space-x-2">
                        <button class="h-3 w-3 rounded-full" v-for="indicator in 5" @click="slideTo(indicator-1)" :class="[(indicator-1)==index? 'bg-red-200':'bg-red-400']">
                        </button>
                    </div>
                    <div><button @click="slideNext" class="text-xl font-bold bg-red-400 px-3">&rightarrow;</button></div>
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
                testimonies: [
                    {name: "Charles Paul", img: "src/assets/imgs/img1.jpg", occupation: "Web Developer", rating: 3, testimony: "I had a great time using vue js"},
                    {name: " Paul", img: "src/assets/imgs/img2.jpg", occupation: "Web Developer", rating: 3, testimony: "I had a great time using vue js"},
                    {name: "Charles ", img: "src/assets/imgs/img3.jpg", occupation: "Web Developer", rating: 3, testimony: "I had a great time using vue js"},
                    {name: " Paul", img: "src/assets/imgs/img4.jpg", occupation: "Web Developer", rating: 3, testimony: "I had a great time using vue js"},
                    {name: "Charles ", img: "src/assets/imgs/img5.jpg", occupation: "Web Developer", rating: 3, testimony: "I had a great time using vue js"},
                ]
            }
        },
        mounted () {
            this.slide()
        },
        computed: {
            
        },
        methods: {
            slide() {
                setInterval(() => {
                    if(this.index == 5){
                        this.index = 0
                    }
                    else {
                        this.index++
                    } 
                    console.log(this.index);
                }, 7000);
            },

            slideNext() {
                if(this.index == 5) {
                    this.index = 0
                }
                else {
                    this.index++
                } 
            },

            slidePrev() {
                if(this.index == 0) {
                    this.index = 5
                }
                else {
                    this.index--
                } 
            },

            slideTo(index) {
                this.index = index
            },
        }
    }
</script>

<style scoped>

</style>