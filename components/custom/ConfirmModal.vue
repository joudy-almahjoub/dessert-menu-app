<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 flex justify-center items-center z-50"
    >
      <div class="bg-darkBrown p-6 rounded-lg shadow-lg max-w-sm">
        <h2 class="text-xl font-bold mb-4">Order Confirmation</h2>
        <p class="mb-4">Are you sure you want to confirm your order?</p>
        <div class="flex justify-end gap-4">
          <button
            @click="confirmOrder"
            class="bg-pink text-wheat font-semibold py-2 px-4 rounded-md hover:bg-pink-dark transition duration-200"
          >
            Confirm
          </button>
          <button
            @click="closeModal"
            class="bg-gray-300 text-whaet font-semibold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
  
  <script setup>
import { defineEmits } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close", "confirm"]);
const { resetCart } = useCart();
function closeModal() {
  emit("close");
}

function confirmOrder() {
  resetCart();
  emit("close");
}
</script>
  
  <style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
  