<template>
    <div class="w-full">
        <nav class="w-full px-10 py-3 bg-gradient-to-r from-lime-400 to-teal-400 flex justify-between">
            <div class="text-xl font-bold text-red-50">
                <router-link to="/">Web Calculator</router-link>
            </div>
        </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.router-link-exact-active.real {
    font-weight: 800;
    color: darkgreen;
}
</style>