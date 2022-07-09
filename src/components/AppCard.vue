<template>
    <div class="w-full flex justify-center px-4 pt-10">
        <div class="w-full md:w-2/5 space-y-24">
            <div class="flex justify-center">
                <input type="text" name="city" placeholder="Enter name of city, state or country" class="h-10 w-full px-4 rounded-md overflow-x-hidden outline-purple-800 ring-purple-800">
            </div>

            <div class="px-4 py-10 rounded-xl w-full bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-800">
                <div class="w-full">
                    <h4 class="text-center font-bold text-2xl mb-8">
                        {{greeting}}
                    </h4>

                    <h4 class="text-center font-bold text-lg mb-8">
                        London
                    </h4>
                    
                    <h4 class="text-center font-bold text-lg mb-8">
                        Today: 8 Jul 2022
                    </h4>

                    <div class="flex justify-evenly">
                        <div class="">
                            <h1 class="font-bold text-6xl">
                                {{Math.round(weatherData.temperature)}}&#176;C
                            </h1>
                        </div>

                        <div>
                            <h4 class="font-semibold text-lg">
                                {{weatherData.weathercode}}
                            </h4>
                        </div>
                    </div>

                    <div class="flex justify-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>

                    <div class="flex justify-evenly mt-8">
                        <div class="">
                            <h1 class="font-semibold text-5xl">
                                23&#176;C
                            </h1>
                        </div>

                        <div class="">
                            <h1 class="font-semibold text-5xl">
                                23&#176;C
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import {ref, reactive, computed, onMounted} from "vue";
import { useDecodeWeatherVariable } from '../helpers/weather.js';

// Props ...
const props = defineProps({
    greeting: {
        type: String,
        required: true
    }
})

// 
const currentUserCity = ref("Nigeria")
const currentUserCityLon = ref("")
const currentUserCityLat = ref("")
const weatherData = ref({})

const getUserCurrentCity = computed(() => {
    return currentCity.value;
})

async function getUserCityFromIpAddress() {
    const resp = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q='+currentUserCity.value+'&appid=57c28e094a01c8f4a2bac86d745068de');

    currentUserCityLon.value = resp.data[0].lon
    currentUserCityLat.value = resp.data[0].lat

    getUserWeatherData()
}

async function getUserWeatherData() {
    const resp = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude='+currentUserCityLat.value+'&longitude='+currentUserCityLon.value+'&current_weather=true&daily=temperature_2m_max&timezone=UTC'
    );

    weatherData.value = resp.data.current_weather
    let weatherCode = weatherData.value.weathercode
    const weatherCodeString = reactive(useDecodeWeatherVariable(weatherCode))

    weatherData.value.weathercode = weatherCodeString.decodedStr
}

onMounted(() => {
    getUserCityFromIpAddress()
})


</script>