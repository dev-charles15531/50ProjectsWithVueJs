<template>
  <div class="">
    <div class="w-full flex justify-center">
      <div class="mt-10 px-5 pb-5 w-3/5 border-2 border-gray-300 rounded">
        <p class="py-3 px-5 mt-5 bg-gradient-to-r from-orange-200 to-amber-300 text-sm font-semibold" v-if="notes.length < 1"> {{ emptyList }}</p>

        <div v-else>
          <p class="py-3 px-5 mt-5 mb-3 bg-gradient-to-r from-lime-200 to-green-300 text-sm font-semibold text-gray-600">{{ populatedList }}</p>
          
          <div v-for="note in notes" :key="note.id">
            <router-link :to="'/note/' + note.id" class="flex justify-between p-3 bg-stone-100 mb-1 cursor-pointer">
              <div>
                <h1 class="font-semibold text-gray-700 font-sans">{{ note.title }}</h1>
                <h1 class="text-xs text-gray-700 font-sans">{{ formatDate(note.dateCreated)  }}</h1>
              </div>
              <button class="font-extrabold opacity-100 text-teal-600 text-xl hover:text-2xl" @click.prevent="removeNote(note.id)">&times;</button>
            </router-link>
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
      notes: [],
      dateOptions: {weekday:'long', year:'numeric', month:'long', day:'numeric'},
      emptyList: "No note available at this time",
    }
  },

  computed: {
    /**
     * @return {string} the number of notes available [NB the pronoun, note|notes]
     */
    populatedList() {
      let noun = this.notes.length == 1? "note" : "notes";
      return this.notes.length + " Available " + noun;
    }
  },

  methods: {
    /**
     * Populates the notes array with data received from HTTP Get api call (JSON Server)
     */
    async getNotes() {
      try {
        const resp = await axios.get(`http://localhost:3001/notes`);
        this.notes = resp.data;
      }
      catch(err) {
        console.log(err);
      }
    },

    /**
     * Takes in date string parameter and format based on defined options
     * @param {string} date The date string to format
     * 
     * @return {Date} Formatted Date object
     */
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-US", this.dateOptions)
    },

    /**
     * Deletes a note with the HTTP DELETE api call(JSON Server) where the note id is this parameter id.
     * Filters the notes array to remove deleted note
     * @param {int} id The note id
     */
    removeNote(id) {
      axios.delete(`http://localhost:3001/notes/${id}`);
      this.notes = this.notes.filter((item) => item.id !== id);
    }
  },

  beforeMount() {
    this.getNotes()
  }
}
</script>