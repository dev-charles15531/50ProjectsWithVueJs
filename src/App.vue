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
                  <h6 class="text-white text-xs font-medium mr-[1px]">80%</h6>
                  <div
                    class="relative block bg-transparent rounded-sm w-6 h-3 border border-white p-[0.8px]"
                  >
                    <span class="block bg-yellow-300 w-[80%] h-full"></span>
                  </div>
                  <div class="w-[1.3px] h-[6px] bg-white"></div>
                </div>
                <!-- End battery icon -->
              </div>
            </div>
            <!-- End network carrier and top icons -->

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
                      01:46
                    </h1>
                    <!-- End time -->

                    <!-- Date -->
                    <h1 class="text-white text-xl text-center">
                      Wednesday, 18 January
                    </h1>
                    <!-- End date -->

                    <!-- Part of the day indicator -->
                    <div
                      class="mt-1 w-12 h-6 flex justify-center items-center bg-white rounded-xl"
                    >
                      <svg
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
                    </div>
                    <!-- End part of the day indicator -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End date section -->
          </div>

          <div
            class="w-full h-3/6 flex justify-center justify-self-center items-center"
          >
            <div
              class="w-11/12 h-72 md:h-52 backdrop-blur-sm bg-white/70 rounded-md p-5 md:p-3"
            >
              <div class="w-full h-full">
                <div
                  class="w-full flex justify-between space-x-2 items-center text-gray-900"
                >
                  <img
                    class="h-24 md:h-16 w-4/12 md:w-3/12 rounded"
                    src="../public/imgs/owl.jpeg"
                  />
                  <div class="w-7/12 flex flex-col">
                    <span class="text-blue-700 text-xs font-normal"
                      >iPhone</span
                    >
                    <span
                      class="text-sm font-medium leading-4 whitespace-nowrap overflow-hidden"
                      >Highest In The Room gdrdrdrd tsetsrd uuu</span
                    >
                    <span class="text-xs font-medium">Travis Scott</span>
                  </div>
                  <div class="w-1/12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div class="mt-4 md:mt-2 w-full">
                  <!-- Seek Progress bar -->
                  <div
                    class="relative block backdrop-blur-sm bg-blue-700/30 rounded w-full h-1"
                  >
                    <span
                      class="relative block rounded border-r-2 bg-white w-[60%] h-1"
                    >
                      <span
                        class="absolute w-2 h-2 rounded-full bg-white -right-1 top-[-2px]"
                      ></span>
                    </span>
                  </div>
                  <!-- End seek Progress bar -->

                  <!-- Seek timer -->
                  <div
                    class="flex justify-between text-[10px] font-normal text-gray-600"
                  >
                    <h6>1:27</h6>
                    <h6>-2:06</h6>
                  </div>
                  <!-- End seek timer -->

                  <div
                    class="mt-3 flex justify-between items-center px-14 md:px-10"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#626e67"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-9 h-9 text-transparent"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#626e67"
                        viewBox="0 0 24 24"
                        stroke-width="5.5"
                        stroke="currentColor"
                        class="w-9 h-7 text-[#626e67]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#626e67"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-9 h-9 text-transparent"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    class="w-full mt-8 md:mt-3 flex justify-between space-x-2 items-center px-4"
                  >
                    <div class="w-1/12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#888a89"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-[#888a89]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    </div>
                    <div class="w-10/12">
                      <!-- Seek Progress bar -->
                      <div
                        class="relative block backdrop-blur-sm bg-blue-700/30 rounded w-full h-1"
                      >
                        <span
                          class="relative block rounded border-r-2 bg-white w-[60%] h-1"
                        >
                          <span
                            class="absolute w-4 h-4 rounded-full bg-white -right-1 top-[-6px]"
                          ></span>
                        </span>
                      </div>
                      <!-- End seek Progress bar -->
                    </div>
                    <div class="w-1/12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#888a89"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-transparent"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
</script>
