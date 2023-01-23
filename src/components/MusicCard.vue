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
          src="/imgs/owl.jpeg"
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
          class="w-full h-1 relative block backdrop-blur-sm bg-blue-700/30 rounded"
        >
          <input
            type="range"
            min="0"
            :max="totalPlayingMusicDuration"
            :value="seekPosition"
            class="slider"
            @change="startSeek"
            @keyup="startSeek"
          />
          <div
            class="relative top-0 z-0 h-1 bg-white rounded"
            :style="
              'width: ' + (seekPosition / totalPlayingMusicDuration) * 100 + '%'
            "
          ></div>
        </div>
        <!-- End seek Progress bar -->

        <!-- Seek timer -->
        <div class="flex justify-between text-[10px] font-normal text-gray-600">
          <h6>{{ seekPlayed }}</h6>
          <h6>{{ formattedTotalPlayingMusicDuration }}</h6>
        </div>
        <!-- End seek timer -->

        <div class="mt-3 flex justify-between items-center px-14 md:px-10">
          <!-- Previous icon -->
          <div>
            <svg
              @click="previous()"
              xmlns="http://www.w3.org/2000/svg"
              fill="#626e67"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9 hover:w-[37px] cursor-pointer text-transparent transition-all"
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
              v-if="isMusicplaying"
              @click="pause()"
              xmlns="http://www.w3.org/2000/svg"
              fill="#626e67"
              viewBox="0 0 24 24"
              stroke-width="5.5"
              stroke="currentColor"
              class="w-9 h-7 hover:w-[37px] cursor-pointer text-[#626e67] transition-all"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
            <svg
              v-else
              @click="startPlaying()"
              xmlns="http://www.w3.org/2000/svg"
              fill="#626e67"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-7 hover:w-[37px] cursor-pointer text-[#626e67] transition-all"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
          <!-- End play/pause icon -->

          <!-- Next icon -->
          <div>
            <svg
              @click="next()"
              xmlns="http://www.w3.org/2000/svg"
              fill="#626e67"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9 hover:w-[37px] cursor-pointer text-transparent transition-all"
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

          <!-- Volume bar -->
          <div class="w-10/12">
            <div
              class="w-full h-1 relative block backdrop-blur-sm bg-blue-700/30 rounded"
            >
              <input
                type="range"
                min="0"
                max="100"
                :value="volume * 100"
                class="vslider"
                @change="changeVolume"
              />
              <div
                class="relative top-0 z-0 h-1 bg-white rounded"
                :style="'width: ' + volume * 100 + '%'"
              ></div>
            </div>
          </div>
          <!-- End volume bar -->

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
import { onUnmounted, ref, watch } from "vue";
import { useHead } from "@vueuse/head";
import { useSound } from "@vueuse/sound";

const jsmediatags = ref(null);

// set some site head data
useHead(
  {
    title: "iPhone Lockscreen Music Player | 50 Projects With VueJs",
    script: [
      {
        src: "/js/jsmediatags.min.js",
        tagPosition: "bodyClose",
        onload: () => {
          initExternalJs(window.jsmediatags);
        },
      },
    ],
  },
  { mode: "client" }
);

// initializes the external js library (jsmediatags)
const initExternalJs = (value) => {
  jsmediatags.value = value;
};

// Relative path to music folder
const musicFolder = "/musics/";
// Get all available music filenames
const availableMp3s = ref([
  "Omah-Lay-Bad-Influence.mp3",
  "JeriQ_-_Back_To_Basics.mp3",
  "JeriQ_-_Billion_Dollar_Dream.mp3",
  "JeriQ_-_Remember.mp3",
  "JeriQ-Financial-Conji.mp3",
  "JeriQ-Paper.mp3",
]);

// the array index of the current playing music
const currentPlayingMusic = ref(0);
// the music initial duration
const initialPlayingMusicDuration = ref("");
// the music total duration
const totalPlayingMusicDuration = ref(0);
const formattedTotalPlayingMusicDuration = ref("");
// if the music is playing or not
const isMusicplaying = ref(false);
// the active sound id
const soundId = ref(0);
// the interval function id for seeking onplay music duration/range
const seekInterval = ref(0);
// the current seek position
const seekPosition = ref(0);
// the seek duration played
const seekPlayed = ref("0:00");
// sound volume
const volume = ref(0);

// loading useSound composable
const { sound } = useSound(
  musicFolder + availableMp3s.value[currentPlayingMusic.value],
  {
    html5: true,
    preload: "metadata",
    onload: () => {
      // set music total duration
      totalPlayingMusicDuration.value = sound.value.duration();
      seekPlayed.value = "0:00";

      // set volume
      volume.value = sound.value.volume();

      console.log("loaded");

      // read media file and get music info
      //   const imgUrl = new URL(
      //     musicFolder + availableMp3s.value[currentPlayingMusic.value],
      //     import.meta.url
      //   ).href;
      //   window.jsmediatags.read(imgUrl, {
      //     onSuccess: function (tag) {
      //       console.log(tag);
      //     },
      //     onError: function (error) {
      //       console.log(":(", error.type, error.info);
      //     },
      //   });
    },
    onplay: () => {
      clearInterval(seekInterval.value);
      isMusicplaying.value = true;
      seekInterval.value = setInterval(() => {
        seekPosition.value = sound.value.seek();
        // set the duration of seek played
        seekPlayed.value = sToHHmm(sound.value.seek());
        // set the duration of seek un-played
        formattedTotalPlayingMusicDuration.value =
          "-" + sToHHmm(totalPlayingMusicDuration.value - sound.value.seek());
      }, 1000);
      console.log("playing!");
    },
    onseek: () => {
      console.log("seeked!");
    },
    onpause: () => {
      clearInterval(seekInterval.value);
      isMusicplaying.value = false;
      console.log("paused!");
    },
    onend: () => {
      clearInterval(seekInterval.value);
      isMusicplaying.value = false;
      formattedTotalPlayingMusicDuration.value = "0:00";
      console.log("ended!");
    },
    onstop: () => {
      clearInterval(seekInterval.value);
      seekPosition.value = 0;
      seekPlayed.value = "0:00";
      console.log("stopped!");
    },
  }
);

/**
 * watch the total playing music duration and format onchange
 */
watch(totalPlayingMusicDuration, (newTotalPlayingMusicDuration) => {
  let duration = newTotalPlayingMusicDuration;
  formattedTotalPlayingMusicDuration.value = sToHHmm(duration);
});

/**
 * Seeks current music
 * @param {event} evt The fired event triggerer
 */
function startSeek(evt) {
  seekPosition.value = evt.target.value;
  sound.value.seek(evt.target.value);
}

/**
 * Format seconds to HH:mm
 * @param {number} s The number of seconds
 *
 * @return The formatted time
 */
function sToHHmm(s) {
  let durationInMins = Math.floor(s / 60);
  let durationInSecs = Math.round(s % 60)
    .toString()
    .padStart(2, 0);

  return durationInMins + ":" + durationInSecs;
}

/**
 * Starts playing the music
 * ie: the index 0 of the availableMp3s
 *
 * @return void
 */
function startPlaying() {
  soundId.value = sound.value.play();
}

/**
 * Pause the currently playing music
 *
 * @return void
 */
function pause() {
  sound.value.pause(soundId.value);
}

/**
 * Moves to the next music
 * ie: increments the index of the current playing music by 1, or
 * sets the index to 0 if it's set to the last
 *
 * @return void
 */
function next() {
  sound.value.stop();
  sound.value.unload();
  if (currentPlayingMusic.value == availableMp3s.value.length - 1) {
    currentPlayingMusic.value = 0;
  } else {
    currentPlayingMusic.value++;
  }

  sound.value._src =
    musicFolder + availableMp3s.value[currentPlayingMusic.value];
  sound.value.load();

  if (isMusicplaying.value) startPlaying();
}

/**
 * Moves to the previous music
 * ie: decrements the index of the current playing music by 1, or
 * sets the index to the last if it's set to 0
 *
 * @return void
 */
function previous() {
  sound.value.stop();
  sound.value.unload();
  if (currentPlayingMusic.value == 0) {
    currentPlayingMusic.value = availableMp3s.value.length - 1;
  } else {
    currentPlayingMusic.value--;
  }

  sound.value._src =
    musicFolder + availableMp3s.value[currentPlayingMusic.value];
  sound.value.load();

  if (isMusicplaying.value) startPlaying();
}

function changeVolume(evt) {
  volume.value = evt.target.value / 100;
  sound.value.volume(evt.target.value / 100);
}

onUnmounted(() => {
  sound.value.stop();
  sound.value.unload();
});
</script>

<style scoped>
.slider,
.vslider {
  position: absolute;
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  z-index: 1;
  background: transparent;
}

.slider::-webkit-slider-thumb,
.vslider::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 100%;
  background: #ffffff;
  cursor: pointer;
  z-index: 10;
}

.slider::-ms-thumb,
.vslider::-ms-thumb {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 100%;
  background: #ffffff;
  cursor: pointer;
  z-index: 10;
}

.slider::-moz-range-thumb,
.vslider::-moz-range-thumb {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 100%;
  background: #ffffff;
  cursor: pointer;
  z-index: 10;
}

.slider::-webkit-slider-thumb {
  width: 8px;
  height: 8px;
  right: 1.1px;
}
.slider::-ms-thumb {
  width: 8px;
  height: 8px;
  right: 1.1px;
}
.slider::-moz-range-thumb {
  width: 8px;
  height: 8px;
  right: 1.1px;
}

.vslider::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  right: 0.3px;
}
.vslider::-ms-thumb {
  width: 16px;
  height: 16px;
  right: 0.3px;
}
.vslider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  right: 0.3px;
}
</style>
