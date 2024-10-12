<template>
  <div>
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 flex justify-end z-50">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-wheat text-darkBrown p-6 overflow-y-auto shadow-xl flex flex-col"
        >
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Your Cart</h2>
            <button class="text-gray-500 hover:text-pink" @click="closeDrawer">
              ✕
            </button>
          </div>
          <p
            v-if="!itemsLength"
            class="text-pink flex items-center justify-center h-full"
          >
            Your cart is empty
          </p>
          <ul v-else class="space-y-6 flex-1 overflow-y-auto">
            <li
              v-for="item in cartStore.items"
              :key="item.id"
              class="flex items-center justify-between border-b border-gray-300 pb-4"
            >
              <div>
                <p class="text-lg font-medium">{{ item.name }}</p>
                <p class="text-sm text-gray-600">
                  {{ item.quantity }} x ${{ item.price }}
                </p>
              </div>

              <div class="flex items-center space-x-2">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="text-darkBrown px-2 py-1 rounded hover:bg-darkYellow transition"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="text-darkBrown px-2 py-1 rounded hover:bg-darkYellow transition"
                >
                  +
                </button>
              </div>

              <button
                @click="removeFromCart(item.id)"
                class="text-pink text-sm hover:text-lightYellow ml-4"
              >
                Remove
              </button>
            </li>
          </ul>

          <div class="mt-6">
            <div
              class="flex justify-between items-center text-seondary font-semibold"
            >
              <span>Total Items:</span>
              <span>{{ cartStore.totalItems }}</span>
            </div>
            <div
              class="flex justify-between items-center text-seondary font-semibold mt-2"
            >
              <span>Total Price:</span>
              <span>${{ cartStore.cartTotalPrice }}</span>
            </div>
            <div class="flex gap-2">
              <button
                @click="openConfirmationModal"
                class="mt-6 w-full btn-primary"
              >
                Confirm Order
              </button>
              <button @click="resetCart" class="mt-6 w-full btn-secondary">
                Start New Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <ConfirmModal
      :isVisible="isModalVisible"
      @close="isModalVisible = false"
      @confirm="handleOrderConfirmation"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import ConfirmModal from "./custom/ConfirmModal.vue";
import { useCart } from "~/composables/useCart";
const props = defineProps({
  isOpen: Boolean,
});

const isModalVisible = ref(false);
const cartStore = useCartStore();
const emit = defineEmits(["close"]);
const cart = useCart();
const {
  itemsLength,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cart;

function openConfirmationModal() {
  isModalVisible.value = true;
}
function closeDrawer() {
  emit("close");
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
