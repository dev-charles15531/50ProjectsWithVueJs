<template>
  <!-- Date section -->
  <div class="mt-10 md:mt-2 w-full flex justify-center">
    <div class="w-5/6">
      <div class="w-full flex justify-center">
        <div align="center">
          <!-- Lock icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-white text-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <!-- End time -->

          <!-- Time -->
          <h1 class="mt-1 text-white text-6xl text-center font-light">
            {{ currentTime }}
          </h1>
          <!-- End time -->

          <!-- Date -->
          <h1 class="text-white text-xl text-center">{{ currentDate }}</h1>
          <!-- End date -->

          <!-- Part of the day indicator -->
          <div
            class="mt-1 w-12 h-6 flex justify-center items-center bg-white rounded-xl"
          >
            <svg
              v-if="dayTime == 'night'"
              xmlns="http://www.w3.org/2000/svg"
              fill="#6384c3"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-5 text-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-5 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <!-- End part of the day indicator -->
        </div>
      </div>
    </div>
  </div>
  <!-- End date section -->
</template>

<script setup>
import moment from "moment";
import { ref, computed, onMounted } from "vue";

// get current time
const currentTime = ref("");
// get current date
const currentDate = ref("");
// get day time =>> determine the time of the day. ie: day/night
const dayTime = ref("");

onMounted(() => {
  // After every second, repopulate date and time
  setInterval(() => {
    currentDate.value = moment().format("dddd, DD MMMM");
    currentTime.value = moment().format("HH:mm");
    dayTime.value =
      moment().format("HH") > 5 && moment().format("HH") <= 18
        ? "day"
        : "night";
  }, 1000);
});
</script>
