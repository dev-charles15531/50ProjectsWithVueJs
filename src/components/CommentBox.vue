<template>
    <div class="w-full bg-[#f5f6fa] mt-5">
        <form class="hidden w-full md:flex items-start space-x-10 p-5 text-[16px]">
            <div>
                <!-- User avatat -->
                <img :src="currentUser.image.png" alt="User Image">
            </div>

            <div class="w-full">
                <!-- comment textarea -->
                <textarea name="comment" id="comment" cols="30" rows="3" placeholder="Add a comment..." class="w-full p-4 rounded-md border-[1px] border-[#eaecf1] focus:border-[#67727e] focus:outline-none text-[#67727e]"></textarea>
            </div>

            <div>
                <!-- submit button -->
                <input type="submit" value="send" class="uppercase cursor-pointer bg-[#5457b6] hover:bg-[#c3c4ef] text-white font-semibold px-8 pt-2 pb-3 rounded-md">
            </div>
        </form>

        <form class="w-full block md:hidden p-5 text-[16px]">
            <div class="w-full">
                <!-- comment textarea -->
                <textarea name="comment" id="comment" cols="30" rows="3" placeholder="Add a comment..." class="w-full p-4 rounded-md border-[1px] border-[#eaecf1] focus:border-[#67727e] focus:outline-none text-[#67727e]"></textarea>
            </div>

            <div class="flex justify-between items-center mt-3">
                <div>
                    <!-- User avatat -->
                    <img :src="currentUser.image.png" alt="User Image">
                </div>
    
                <div>
                    <!-- submit button -->
                    <input type="submit" value="send" class="uppercase cursor-pointer bg-[#5457b6] hover:bg-[#c3c4ef] text-white font-semibold px-8 pt-2 pb-3 rounded-md">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

/**
 * define the props interface
 */
interface userObj {
    image: {png?: string; webp?: string},
    username?: string
}


/**
 * define props 
 */
const props = defineProps<{
    currentUser: userObj
}>()

</script>