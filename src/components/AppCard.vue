<template>
    <div class="w-full flex justify-center px-4 pt-10">
        <div class="w-full md:w-2/5">
            
            <!-- City search box -->
            <SearchInput @use-input="fetchCoordinateFromInput" />

            <div v-if="error.length" class="mt-24 h-20 flex justify-center items-center text-sm text-white p-4 bg-red-600 rounded-md">
                <h2 class="text-center">{{error}}</h2>
            </div>
            <div v-else class="px-4 py-10 rounded-xl w-full mt-24" :class="primary">
                <div class="w-full">
                    <h4 class="text-center font-bold text-2xl mb-8" :class="secondary">
                        {{greeting}}
                    </h4>

                    <h4 class="text-center font-bold text-lg mb-8" :class="secondary">
                        {{userLocation.state + ', ' + userLocation.country}}
                    </h4>
                    
                    <h4 class="text-center font-bold text-lg mb-8" :class="secondary">
                        {{new Date().toDateString()}}
                    </h4>

                    <div class="flex justify-evenly" :class="secondary">
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
                        <span class="material-icons text-7xl" :class="icon">
                            sunny
                        </span>
                    </div>

                    <div class="flex justify-evenly mt-8" :class="secondary">
                        <div class="">
                            <h1 class="font-semibold text-5xl">
                                {{weatherData.windspeed}}    
                            </h1>
                            <span class="text-xs font-bold">
                                windspeed(KMH)
                            </span>
                        </div>

                        <div class="">
                            <h1 class="font-semibold text-5xl">
                                {{weatherData.winddirection}}    
                            </h1>
                            <span class="text-xs font-bold">
                                DWD(KMH)
                            </span>
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

// Components import
import SearchInput from "./SearchInput.vue"

// Props ...
const props = defineProps({
    greeting: {
        type: String,
        required: true
    },
    primary: {
        type: String,
        required: true
    },
    secondary: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
//=================================================================//

// declare variable data to use in this component
const userLocation = ref("")
const currentUserCityLon = ref("")
const currentUserCityLat = ref("")
const weatherData = ref({})
const error = ref("")


/**
 * Gets emitted from the SearchInput component, returns the input for
 * which we want to generate weather info
 * @param {String} input emitted event argument
 */
async function fetchCoordinateFromInput(input) {
    try {

        const resp = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q='+input+'&appid=57c28e094a01c8f4a2bac86d745068de');
    
        // Set input longitide and latitude
        currentUserCityLon.value = resp.data[0].lon
        currentUserCityLat.value = resp.data[0].lat
    
        // Set input country
        userLocation.value = {
            country: resp.data[0].country,
            state: resp.data[0].state
        }
    
        // Get weather data 
        getUserWeatherData()
    }
    catch (e) {
        error.value = "An unknown or network error occured, Please try again"
    }
}


/**
 * Get all weather data from declared longitude and latitude
 */
async function getUserWeatherData() {
    const resp = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude='+currentUserCityLat.value+'&longitude='+currentUserCityLon.value+'&current_weather=true&daily=temperature_2m_max&timezone=UTC'
    );

    // Get current weather info
    weatherData.value = resp.data.current_weather

    // Decode the returned weather code
    let weatherCode = weatherData.value.weathercode
    const weatherCodeString = reactive(useDecodeWeatherVariable(weatherCode))
    weatherData.value.weathercode = weatherCodeString.decodedStr
}

</script>