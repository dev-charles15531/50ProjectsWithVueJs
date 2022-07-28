<template>
    <div class="w-full bg-[#f5f6fa]">
        <div class="flex flex-col-reverse md:flex-row items-start space-x-0 md:space-x-10 p-3 md:p-5 text-[16px]">
            <!-- display flex with reply icon for small screens downwards -->
            <div class="w-full md:w-auto pt-5 md:pt-0 flex justify-between md:block">
                <div class="flex flex-row md:flex-col space-x-5 md:space-x-0 md:space-y-4 items-center bg-[#eaecf1] px-5 py-2 md:px-3 md:py-2 rounded-xl md:rounded-md">
                    <!-- upvote icon -->
                    <div class="text-[#67727e] hover:text-[#5457b6] cursor-pointer">
                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
                        </svg>
                    </div>
                    <!-- vote count -->
                    <div class="text-[#5457b6] font-medium">13</div>
                    <!-- downvote icon -->
                    <div class="text-[#67727e] hover:text-[#5457b6] cursor-pointer">
                        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
                        </svg>
                    </div>
                </div>

                <div class="block md:hidden">
                    <div class="flex items-center space-x-2 cursor-pointer text-[#5457b6]">
                        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                        </svg>
                        <h3 class="font-bold">
                            Reply
                        </h3>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <div class="flex justify-between items-center">
                    <div class="flex justify-start items-center space-x-4 text-gray-900">
                        <img src="/public/avatars/image-amyrobson.png" alt="User Image" class="h-10 w-10">

                        <div>
                            <h4 class="font-medium">amyrobson</h4>
                        </div>
                        <div class="text-[#67727e]">
                            <h4 class="font-normal">1 month ago</h4>
                        </div>
                    </div>

                    <!-- Reply button only visible from medium screen upwards-->
                    <div class="hidden md:block">
                        <div class="flex items-center space-x-2 cursor-pointer text-[#5457b6]">
                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/>
                            </svg>
                            <h3 class="font-bold">
                                Reply
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Comment text -->
                <div class="mt-4 text-[#67727e]">
                    <p class="font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sint minus maiores tempore, expedita provident quaerat modi nobis corrupti cumque, delectus deserunt at voluptatem velit eaque iusto sit nam esse?
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>