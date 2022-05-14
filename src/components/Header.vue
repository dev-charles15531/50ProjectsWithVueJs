<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                Note App
            </div>

            <div class="font-semibold text-sm text-red-50 flex space-x-3">
                <router-link to="/">Home</router-link>
                <router-link to="/add-note">Add Note</router-link>
            </div>
        </nav>
    </div>

    <div>
            <router-view></router-view>
        </div>
</template>

<script>

export default {

    components: {
        
    },

    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.router-link-exact-active {
    font-weight: 800;
    color: darkgreen;
}
</style>