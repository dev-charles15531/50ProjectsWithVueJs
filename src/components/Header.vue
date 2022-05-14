<template>
    <div class="w-full">
        <nav class="w-full px-6 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                Form Validator
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