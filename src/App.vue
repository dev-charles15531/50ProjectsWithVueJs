<template>
  <div class="">
    <div class="w-full px-6 py-4 bg-gradient-to-r from-slate-400 to-stone-300">
      <nav class="text-lg font-semibold text-slate-200">My Super Heroes List</nav>
    </div>
    
    <div class="w-full px-2 md:px-0 flex justify-center">
      <div class="mt-10 px-5 pb-5 w-full md:w-3/5 border-2 border-gray-300 rounded">
        <p class="py-3 px-5 mt-5 bg-gradient-to-r from-orange-200 to-amber-300 text-sm font-semibold" v-if="heroes.length < 1"> {{ emptyList }}</p>

        <div v-else>
          <p class="py-3 px-5 mt-5 mb-3 bg-gradient-to-r from-lime-200 to-green-300 text-sm font-semibold text-gray-600">{{ populatedList }}</p>
          
          <div class="flex justify-between p-3 bg-stone-100 mb-1" v-for="hero in heroes">
            <span>{{ hero }}</span>
            <button class="font-extrabold bg-red-400 px-2 rounded text-white" @click="removeHero(hero)">&times;</button>
          </div>
          <!-- <ul>
            <li v-for="hero in heroes"> {{ hero }} &nbsp; <button @click="removeHero(hero)">&times;</button></li>
          </ul> -->
        </div>

        <br>

        <div class="flex justify-start space-x-5">
          <input class="h-11 w-1/2 font-mono font-semibold border rounded p-4 focus:outline-green-100" ref="newhero" v-model="newHero" placeholder="Add new hero" required /> &nbsp;
            
          <button class="bg-gradient-to-r from-green-600 via-green-300 to-green-500 disabled:bg-gradient-to-r disabled:from-green-300 disabled:via-green-300 disabled:to-green-300 hover:bg-gradient-to-r hover:from-green-300 hover:via-green-400 hover:to-green-200 px-5 rounded" @click="addSuperHero" :disabled="newHero.length < 1">
            <span class="text-sm font-semibold">Add</span>
          </button>  
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      newHero:"",
      heroes: [],
      emptyList: "No super hero available",
    }
  },

  computed: {
    /**
     * Gets the total number of available heroes.
     * Note the singular and plural pronoun [Hero, heroes]
     */
    populatedList() {
      let str = (this.heroes.length == 1)? " Available Hero" : " Available Heroes"
      return this.heroes.length + str
    }
  },

  methods: {
    /**
     * Adds a single hero to the heroes array
     */
    addSuperHero() {
      // Total heroes must be <= 10
      if(this.heroes.length == 10) {
        alert('Maximum of 10 heroes allowed in the hero list')
        this.sanitinzeInput()
        return
      }

      // Disallow duplicate hero entry
      if(this.heroes.includes(this.newHero)) {
        alert('Hero ' +this.newHero+ ' already exists');
      }
      else {
        this.heroes.push(this.newHero)
      }
      this.sanitinzeInput()
      return
    },

    /**
     * Removes a single hero element from the list of heroes
     * @param {string} hero The hero name to remove
     */
    removeHero(hero) {
      let newHeroes = [];
      this.heroes.forEach(element => {
        if(element != hero) {
          newHeroes.push(element);
        }
      });
      this.heroes = newHeroes
    },

    /**
     * Empties the input field and requests focus.
     */
    sanitinzeInput() {
      this.newHero = "";
      this.$refs.newhero.focus()
    }
  },
}
</script>