<template>
    <div class="h-screen w-screen">
        <div class="w-full h-2/5 bg-blue-200 bg-[url('../public/imgs/pattern-bg.png')]">
            <!-- header text -->
            <div class="w-full py-5">
                <h2 class="capitalize font-bold text-lg md:text-xl text-gray-100 text-center">{{ title }}</h2>
            </div>

            <!-- input -->
            <div class="w-full">
                <div class="flex justify-center w-full">
                    <div class="inline-flex justify-center items-center w-full">
                        <div class="w-9/12 md:w-1/4">
                            <input type="text" placeholder="Search for any IP address or domain" class="w-full h-14 p-5 rounded-l-lg focus:outline-none text-[18px] focus:text-zinc-800 font-medium leading-none">
                        </div>
                        <div class="w-14 h-14 rounded-r-lg flex justify-center items-center cursor-pointer bg-black hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                                <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("ip address tracker")
</script>

<style lang="scss" scoped>

</style>