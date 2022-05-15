<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 px-5 pb-5 w-3/5 border-2 border-gray-300 rounded">
          <div class="py-3 px-5 mt-5 mb-3 bg-gradient-to-r from-lime-50 to-green-50 flex justify-between">
            <h2 class="text-xl text-center font-semibold text-gray-900 opacity-50">{{ note.title }}</h2>
            <router-link to="/" class="inline-flex items-center text-gray-900 hover:text-gray-400">
                <span class="text-2xl font-extrabold">&leftarrow;</span>
                <span class="text-sm">Back</span>
            </router-link>
          </div>
            <div class="p-3 bg-stone-100 mb-1">
              <div>
                <p class="text-gray-700 font-sans">{{ note.description }}</p>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            noteId: this.$route.params.id,
            note:[],
        }
    },

    methods: {
      /**
       * Populates the note array with data received from HTTP Get api call (JSON Server)
       */
      async getNote() {
        try {
          const resp = await axios.get('http://localhost:3001/notes/' + this.noteId);
          this.note = resp.data;
        }
        catch(err) {
          console.log(err);
        }
      },
    },

  mounted() {
    this.getNote()
  }
}
</script>