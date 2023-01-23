<template>
  <div class="bg-gray-50 w-screen h-screen">
    <div
      class="w-full h-full bg-transparent md:flex md:justify-center md:items-center"
    >
      <div
        v-if="cameraOn"
        class="h-full w-full md:h-5/6 xl:h-4/5 md:w-80 bg-green-300 rounded-sm"
      >
        <div
          v-if="cameraLoading"
          class="h-full w-full flex justify-center items-center bg-gray-700"
        >
          <div
            class="h-28 w-28 flex justify-center items-center rounded-full bg-gray-500 animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-14 h-14 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>
        </div>
        <Camera
          ref="camera"
          :playsinline="false"
          :resolution="{ width: width, height: height }"
          @loading="cameraLoading = true"
          @started="cameraLoading = false"
        >
          <div class="w-full flex justify-between items-center">
            <div
              class="h-10 w-10 flex justify-center items-center rounded-full bg-transparent border-2 border-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 hover:w-6 h-5 hover:h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
            </div>

            <div
              class="h-10 w-10 flex justify-center items-center rounded-full bg-transparent border-2 border-white"
            >
              <button
                class="h-7 hover:h-6 w-7 hover:w-6 rounded-full bg-white cursor-pointer"
                @click="snapshot"
              ></button>
            </div>

            <div
              class="h-10 w-10 flex justify-center items-center rounded-full bg-transparent border-2 border-white cursor-pointer"
              @click="closeCam"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 hover:w-6 h-5 hover:h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </Camera>
      </div>
      <div
        v-else
        class="h-full w-full md:h-5/6 xl:h-4/5 md:w-80 bg-green-300 bg-[url('/imgs/owl.jpeg')] bg-cover bg-center rounded-sm"
        ref="elToDetermineCameraSize"
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
            <BottomWidgets @open-camera="openCamera" />

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
import BottomWidgets from "./components/BottomWidgets.vue";
import Camera from "simple-vue-camera";
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";

const camera = ref(null);
const cameraOn = ref(false);
const cameraLoading = ref(false);
const openCamera = () => {
  cameraOn.value = true;
};
const closeCam = () => {
  camera.value.stop();
  cameraOn.value = false;
};
const snapshot = async () => {
  const blob = await camera.value.snapshot(
    { width: 820, height: 1080 },
    "image/png",
    1.0
  );

  // To show the screenshot with an image tag, create a url
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
};
const changeCam = () => {
  const devicesFound = camera.value.devices(["videoinput"]);
  if (devicesFound.length <= 1) return;

  for (let index = 0; index < devicesFound.length; index++) {
    if (index == devicesFound.length - 1) {
      camera.value.changeCamera(devicesFound[0].deviceId);
      console.log(index);
      return;
    }
    if (devicesFound[index].deviceId == camera.value.currentDeviceID()) {
      camera.value.changeCamera(devicesFound[index + 1].deviceId);
      console.log(index);
      return;
    }
  }
};

const elToDetermineCameraSize = ref(null);
const { width, height } = useElementSize(elToDetermineCameraSize);
</script>

<style>
#slot-container {
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;
}
</style>
