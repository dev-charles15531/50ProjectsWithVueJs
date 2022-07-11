<template>
    <div 
    class="h-full md:h-screen bg-cover bg-no-repeat space-y-20"
    :class="[timeData.img, (store.getMssg.length)? 'md:h-screen':'md:h-full']"
    >
        <NavHeader dev-name="Dev Charles" />
        
        <AppCard 
            :greeting=" 'GOOD ' + timeData.string" 
            v-bind="colors"
        />
    </div>
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";
import AppCard from "./components/AppCard.vue";
import { errorStore } from "./store/errors";
import { ref, onMounted, computed } from "vue";

// init store
const store = errorStore()

// Hold the day string value
const timeData = ref({})
const colors = ref({})

/**
 *  Set day string value from current hour and set styling based on time
 * 
 * @return null
 * */ 
function getTimeString() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        timeData.value = {
            string: "MORNING",
            img: "bg-[url('./imgs/morning.jpg')]"
        }
        colors.value = {
            primary: "bg-gradient-to-br from-slate-200 via-slate-300 to-gray-500",
            secondary: "text-slate-900",
            icon: "text-blue-100"
        }
    } 
    else if (curHr < 16) {
        timeData.value = {
            string: "AFTERNOON",
            img: "bg-[url('./imgs/afternoon.jpg')]"
        }
        colors.value = {
            primary: "bg-gradient-to-br from-purple-400 via-green-300 to-indigo-300",
            secondary: "text-slate-900",
            icon: "text-orange-200"
        }
    } 
    else if (curHr < 20) {
        timeData.value = {
            string: "EVENING",
            img: "bg-[url('./imgs/evening.jpg')]"
        }
        colors.value = {
            primary: "bg-gradient-to-br from-orange-400 via-gray-800 to-slate-800",
            secondary: "text-gray-200",
            icon: "text-gray-400"
        }
    }
    else {
        timeData.value = {
            string: "NIGHT",
            img: "bg-[url('./imgs/night.jpg')]"
        }
        colors.value = {
            primary: "bg-gradient-to-br from-blue-900 via-black to-zinc-800",
            secondary: "text-gray-400",
            icon: "text-blue-200"
        }
    }
}

onMounted(() => {
    getTimeString()
})

</script>
