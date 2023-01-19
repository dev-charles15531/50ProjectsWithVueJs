<template>
  <div class="bg-gray-50 w-screen h-screen">
    <div
      class="w-full h-full bg-transparent md:flex md:justify-center md:items-center"
    >
      <div
        class="h-full w-full bg-green-300 bg-[url('/public/imgs/owl.jpeg')] bg-cover bg-center md:h-5/6 xl:h-4/5 md:w-80 rounded-sm"
      >
        <div class="w-full h-full flex flex-col items-center justify-between">
          <div class="w-full h-2/6 md:h-[38%]">
            <TopWidgets />

            <DateSection />
          </div>

          <div
            class="w-full h-3/6 flex justify-center justify-self-center items-center"
          >
            <MusicCard />
          </div>

          <div
            class="h-1/6 md:h-1/6 w-full px-5 pb-3 flex flex-col justify-end"
          >
            <div class="w-full flex justify-between items-center">
              <!-- Flashlight -->
              <div
                class="w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-sm bg-white/70 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="h-6 w-6 text-gray-700"
                >
                  <path
                    fill="#374151"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31c-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52c24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81Z"
                  />
                  <circle cx="224.68" cy="287.28" r="20" fill="currentColor" />
                  <path
                    fill="#374151"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="m289 81l142 142"
                  />
                </svg>
              </div>
              <!-- End flashlight -->

              <!-- Swipe info -->
              <div class="self-end">
                <span class="text-sm font-medium text-gray-200"
                  >Swipe up to unlock</span
                >
              </div>
              <!-- End swipe info -->

              <!-- Camera -->
              <div
                class="w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-sm bg-white/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="h-6 w-6 text-gray-700"
                >
                  <circle cx="256" cy="272" r="64" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48ZM256 368a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96Z"
                  />
                </svg>
              </div>
              <!-- End camera -->
            </div>

            <div class="mt-2 w-full flex justify-center">
              <div class="h-1 w-2/5 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopWidgets from "./components/TopWidgets.vue";
import DateSection from "./components/DateSection.vue";
import MusicCard from "./components/MusicCard.vue";
</script>
