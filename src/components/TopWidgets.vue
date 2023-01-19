<template>
  <!-- Network carrier and top icons -->
  <div class="bg-transparent w-full h-12 flex justify-between p-3">
    <div class="pt-[2px] w-[22%] text-white text-sm font-medium">
      <Vue3Marquee :duration="15">
        <span class="mx-3">MTN-Stay Safe</span>
        <span class="mx-3">Etisalat</span>
      </Vue3Marquee>
    </div>
    <div class="flex items-center space-x-[6px]">
      <!-- Network bar -->
      <div
        class="pt-[2px] w-4 h-3 flex space-x-[1px] items-baseline bg-transparent"
      >
        <div class="w-[4px] h-[3px] rounded-sm bg-white"></div>
        <div class="w-[4px] h-[6px] rounded-sm bg-white"></div>
        <div class="w-[4px] h-[9px] rounded-sm bg-white"></div>
        <div class="w-[4px] h-[12px] rounded-sm bg-white"></div>
      </div>
      <!-- End network bar -->

      <!-- Internet connection -->
      <svg
        v-if="isOnline"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="4"
        stroke="currentColor"
        class="w-4 h-[15px] text-white -rotate-45"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <!-- End internet connection -->

      <!-- Battery icon -->
      <div class="pt-[2px] flex items-center">
        <h6 class="text-white text-xs font-medium mr-[1px]">
          {{ level * 100 + "%" }}
        </h6>
        <div
          class="relative block bg-transparent rounded-sm w-6 h-3 border border-white p-[0.8px]"
        >
          <span
            class="flex justify-center items-center h-full"
            :class="[
              charging ? 'bg-green-500' : 'bg-yellow-300',
              batteryLevelClass,
            ]"
          >
            <svg
              v-if="charging"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-2 h-2 text-transparent"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </span>
        </div>
        <div class="w-[1.3px] h-[6px] bg-white"></div>
      </div>
      <!-- End battery icon -->
    </div>
  </div>
  <!-- End network carrier and top icons -->
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { useBattery, useOnline } from "@vueuse/core";
import { ref } from "vue";

// network status composable
const isOnline = useOnline();

// battery composable
const { charging, level } = useBattery();

// Get battery level as tailwind class
const batteryLevelClass = "w-[" + level.value + "%]";
</script>
