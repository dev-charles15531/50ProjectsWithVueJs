import { ref } from 'vue'

export function useModal() {
    // modal state
    const isModalOpen = ref(false);
    /**
     * method to show the modal
     */
    const openModal = () => {
    isModalOpen.value = true;
    };
    /**
     * method to hide the modal
     */
    const closeModal = () => {
    isModalOpen.value = false;
    };

  // expose managed state as return value
  return { isModalOpen, openModal, closeModal }
}