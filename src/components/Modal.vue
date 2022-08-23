<template>
  <div
    class="fixed top-0 left-0 h-full w-full bg-slate-700 bg-opacity-60"
    @click="hide"
  >
    <div class="h-full w-full flex justify-center items-center px-2 lg:px-0">
      <div class="w-full lg:w-1/4 bg-white p-6 rounded-md" @click.stop>
        <div>
          <!-- modal title -->
          <div>
            <h3 class="text-base md:text-lg font-semibold text-gray-700">
              Delete comment
            </h3>
          </div>

          <!-- modal body -->
          <div class="mt-5">
            <p class="font-medium text-xs lg:text-sm text-[#67727e]">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone
            </p>
          </div>

          <!-- modal footer -->
          <div class="mt-5">
            <div class="w-full flex justify-between items-center">
              <div
                class="px-6 py-2 bg-[#67727e] hover:bg-gray-400 text-base text-white rounded-lg font-medium cursor-pointer"
                @click="hide"
              >
                NO, CANCEL
              </div>

              <div
                class="px-6 py-2 bg-[#ed6468] hover:bg-[#ffb8bb] text-base text-white rounded-lg font-medium cursor-pointer"
                @click="deleteComment"
              >
                YES, DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommentsStore } from "../stores/comments";

// Initialize stores
const commentsStore = useCommentsStore();

/****************************************
 * DEFINE EMITS
 ***************************************/
const emits = defineEmits(["hideModal"]);

// process comment deletion
const deleteComment = () => {
  commentsStore.processCommentDelete();

  // emit hide event
  hide();
};

// hides this modal component
const hide = () => {
  // clear data to delete set in store
  commentsStore.setToDeleteData({});

  // emit hide modal evt
  emits("hideModal");
};
</script>
