<template>
  <div
    class="w-11/12 h-72 md:h-52 backdrop-blur-sm bg-white/70 rounded-md p-5 md:p-3"
  >
    <div class="w-full h-full">
      <div
        class="w-full flex justify-between space-x-2 items-center text-gray-900"
      >
        <img
          class="h-24 md:h-16 w-4/12 md:w-3/12 rounded"
          src="../../public/imgs/owl.jpeg"
        />
        <div class="w-7/12 flex flex-col">
          <span class="text-blue-700 text-xs font-normal">iPhone</span>
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
          <span class="relative block rounded border-r-2 bg-white w-[60%] h-1">
            <span
              class="absolute w-2 h-2 rounded-full bg-white -right-1 top-[-2px]"
            ></span>
          </span>
        </div>
        <!-- End seek Progress bar -->

        <!-- Seek timer -->
        <div class="flex justify-between text-[10px] font-normal text-gray-600">
          <h6>1:27</h6>
          <h6>-2:06</h6>
        </div>
        <!-- End seek timer -->

        <div class="mt-3 flex justify-between items-center px-14 md:px-10">
          <!-- Previous icon -->
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
          <!-- End previous icon -->

          <!-- Play/Pause icon -->
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
          <!-- End play/pause icon -->

          <!-- Next icon -->
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
          <!-- End next icon -->
        </div>

        <div
          class="w-full mt-8 md:mt-3 flex justify-between space-x-2 items-center px-4"
        >
          <!-- Sound down icon -->
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
          <!-- End sound down icon -->

          <!-- Seek Progress bar -->
          <div class="w-10/12">
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
          </div>
          <!-- End seek Progress bar -->

          <!-- Sound up icon -->
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
          <!-- End sound up icon -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { read } from "jsmediatags";

// read("./music-file.mp3", {
//   onSuccess: function (tag) {
//     console.log(tag);
//   },
//   onError: function (error) {
//     console.log(":(", error.type, error.info);
//   },
// });
</script>
