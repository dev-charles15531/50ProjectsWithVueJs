<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="w-2/5">
        <h1 class="mt-12 text-center font-semibold text-gray-600">Enter a hex color code to see its preview</h1>
        <div class="mt-6 mb-3 py-8 px-12 pb-5 w-full h-44 border-2 border-gray-300 rounded" :style="getBgColor">
        </div>

        <input type="text" v-model="color" placeholder="Enter color hex code here" class="h-11 w-full font-serif border rounded py-4 pl-12 focus:outline-green-100" maxlength="7">
      </div>
    </div>    
  </div>
</template>

<script>

export default {
  data() {
    return {
      color: "#d1d5db",
    }
  },

  computed: {
    /**
     * Gets the css background-color property from input
     * @return {string} The background color property
     */
    getBgColor() {
      return "background-color:" + this.color + ";"
    }
  },

  methods: {

  },

}
</script>