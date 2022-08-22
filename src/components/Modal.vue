<template>
  <div class="fixed top-0 left-0 h-full w-full bg-slate-400 bg-opacity-50">
    <div class="h-full w-full flex justify-center items-center">
      <div class="w-full lg:w-1/3 h-48 bg-white p-5">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
/****************************************
 * DEFINE EMITS
 ***************************************/
const emits = defineEmits(["hideModal"]);

const hide = () => {
  // emit hide modal evt
  emits("hideModal");
};
</script>
