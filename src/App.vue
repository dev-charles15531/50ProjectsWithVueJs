<template>
    <div 
    class="h-screen bg-cover bg-no-repeat space-y-20"
    :class="timeData.img"
    >
        <NavHeader dev-name="Dev Charles" />
        
        <AppCard :greeting=" 'GOOD ' + timeData.string" />
    </div>
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";
import AppCard from "./components/AppCard.vue";
import { ref, onMounted } from "vue";

// Hold the day string value
const timeData = ref({})

/**
 *  Set day string value from current hour
 * 
 * @return null
 * */ 
function getTimeString() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        timeData.value = {
            string: "MORNING",
            img: "bg-[url('./public/imgs/morning.jpg')]"
        }
    } 
    else if (curHr < 16) {
        timeData.value = {
            string: "AFTERNOON",
            img: "bg-[url('./public/imgs/afternoon.jpg')]"

        }
    } 
    else if (curHr < 20) {
        timeData.value = {
            string: "EVENING",
            img: "bg-[url('./public/imgs/evening.jpg')]"

        }
    }
    else {
        timeData.value = {
            string: "NIGHT",
            img: "bg-[url('./public/imgs/night.jpg')]"

        }
    }
}

onMounted(() => {
    getTimeString()
})

</script>
