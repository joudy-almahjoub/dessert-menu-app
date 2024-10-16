import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    },
    updateQuantity(productId, increment = true) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        if (increment) {
          item.quantity++;
        } else if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(productId);
        }
      }
    },
    resetCart() {
      this.items = [];
    },
  },
  getters: {
    totalItems: state => state.items.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: state => state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
  },
});
