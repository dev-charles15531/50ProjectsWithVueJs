<template>
    <div class="-mb-8">
        <nav class="flex justify-between items-center p-4 bg-gradient-to-tr from-violet-800 via-indigo-800 to-purple-800">
            <div class="font-bold text-white text-lg">
                Weather App
            </div>

            <div>
                <span class="text-xs font-semibold text-white">Developed by <a :href="'mailto:' + devEmail" class="text-green-200">{{devName}}</a></span>
            </div>
        </nav>
    </div>

</template>

<script setup>
const props = defineProps({
    devName: {
        type: String,
        default: 'Dev Charles'
    },
    devEmail: {
        type: String,
        default: 'dev.charles15531@gmail.com'
    },
})
</script>
