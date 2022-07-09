<template>

    <div class="flex justify-center w-full">
        <div class="relative text-gray-600 focus-within:text-gray-400 w-full">
            <input type="text" v-model="currentUserCity" placeholder="Enter name of city, state or country" class="h-10 w-full px-4 rounded-md overflow-x-hidden outline-purple-800 ring-purple-800">

            <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                <button @click.prevent="$emit('useInput', currentUserCity)" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";

// Event to emit
const emit = defineEmits(['useInput'])


const currentUserCity = ref("Lagos")


onMounted(() => {
    emit('useInput', currentUserCity.value)
})
</script>