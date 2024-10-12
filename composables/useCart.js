import { computed, ref } from "vue";
import { useCartStore } from "~/stores/cart";

export function useCart() {
  const cartStore = useCartStore();

  const itemsLength = computed(() => cartStore.items.length);

  function addToCart(product) {
    cartStore.addToCart(product);
  }
  function removeFromCart(productId) {
    cartStore.removeFromCart(productId);
  }

  function increaseQuantity(productId) {
    cartStore.updateQuantity(productId, true);
  }

  function decreaseQuantity(productId) {
    cartStore.updateQuantity(productId, false);
  }

  function resetCart() {
    cartStore.resetCart();
  }

  return {
    itemsLength,
    resetCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    addToCart,
  };
}
