<template>
    <div class="h-screen w-screen">
        <div class="w-full h-2/5 bg-blue-200 bg-[url('/imgs/pattern-bg.png')]">
            <!-- header text -->
            <div class="w-full py-5">
                <h2 class="capitalize font-bold text-lg md:text-xl text-gray-100 text-center">{{ title }}</h2>
            </div>

            <!-- input -->
            <div class="w-full">
                <div class="flex justify-center w-full">
                    <div class="inline-flex justify-center items-center w-full">
                        <div class="w-9/12 md:w-1/4">
                            <input type="text" v-model="ipAddress" placeholder="Search for any IP address or domain" class="w-full h-14 p-5 rounded-l-lg focus:outline-none text-[18px] focus:text-zinc-800 font-medium leading-none">
                        </div>
                        <div @click="getIpAddressInfo()" class="w-14 h-14 rounded-r-lg flex justify-center items-center cursor-pointer bg-black hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                                <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- card -->
            <div class="relative w-full bg-green-500 flex justify-center">
                <div class="absolute bg-white md:h-40 w-5/6 md:w-3/4 px-5 md:px-10 py-5 md:py-10 top-14 rounded-xl z-20">
                    <div class="w-full h-full space-y-2 md:space-y-0 md:flex md:justify-evenly md:items-center">
                        <!-- show ip address -->
                        <div class="block h-full md:border-r-2 px-10">
                            <h3 class="uppercase text-xs md:text-sm font-bold text-gray-500">ip address</h3>
                            <h3 class="text-xl md:text-2xl font-medium text-gray-800">{{ ipAddress }}</h3>
                        </div>

                        <!-- show location info -->
                        <div class="block h-full md:border-r-2 px-10">
                            <h3 class="uppercase text-xs md:text-sm font-bold text-gray-500">location</h3>
                            <h3 class="text-xl md:text-2xl font-medium text-gray-800">
                                {{ region }}, {{ country }} {{ postalCode }}
                            </h3>
                        </div>

                        <!-- show timezone -->
                        <div class="block h-full md:border-r-2 px-10">
                            <h3 class="uppercase text-xs md:text-sm font-bold text-gray-500">timezone</h3>
                            <h3 class="text-xl md:text-2xl font-medium text-gray-800">
                                UTC {{ timeZone }}
                            </h3>
                        </div>

                        <!-- show the internet service provider -->
                        <div class="block h-full px-10">
                            <h3 class="uppercase text-xs md:text-sm font-bold text-gray-500">isp</h3>
                            <h3 class="text-xl md:text-2xl font-medium text-gray-800">
                                {{ isp }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- map gets rendered here -->
        <div id="map" class="w-full h-3/5 z-0"></div>

    </div>
</template>

<script setup>

// imports
import { onMounted, ref } from "vue";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// app header variable
const title = ref("ip address tracker")

// location variables
const country = ref("")
const region = ref("")
const postalCode = ref("")
const timeZone = ref("")
const isp = ref("")

// IP address and coordinate array [lat, lon]
const ipAddress = ref("")
const mapCoordinates = ref([])

const initializeMap = () => {
    // mount the map on div
    const map = L.map('map', {
        center: mapCoordinates.value,
        zoom: 13
    })

    // Add map layer from open street map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        markerLatLng: mapCoordinates.value,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Add marker icon
    const myIcon = L.icon({
        iconUrl: '/imgs/icon-location.svg',
        iconSize: [20, 30],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    // Add map marker
    const marker = L.marker(mapCoordinates.value, {icon: myIcon}).addTo(map);
}

/**
 * Get the current ip address
 */
const getUserIp = async () => {
    try {
        let resp = await axios.get('https://api.ipify.org/?format=json');
        ipAddress.value = resp.data.ip 
    }
    catch (e) {
        alert("An unknown or network error occured, Please try again")
    }
}

/**
 * Gets details and location data associated with an ip
 */
async function getIpAddressInfo() {
    try {
        let resp = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_FthlITyfHsyqcwvTFQdWcw4nKQFc6&ipAddress='+ipAddress.value);

        // Get and set data from api call
        country.value = resp.data.location.country
        region.value = resp.data.location.region
        postalCode.value = resp.data.location.postalCode
        timeZone.value = resp.data.location.timezone
        isp.value = resp.data.isp
        mapCoordinates.value.push(resp.data.location.lat, resp.data.location.lng)


        // load map
        initializeMap()
    }
    catch (e) {
        alert("An unknown or network error occured, Please try again")
    }
}

onMounted(() => {
    // get user ip
    getUserIp()
    // get ip details and location
    // getIpAddressInfo()
    
})

</script>