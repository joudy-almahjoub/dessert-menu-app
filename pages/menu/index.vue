<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-6 place-items-center mt-10"
  >
    <product-card
      v-for="product in products"
      :key="product.id"
      :imageUrl="product.image"
      :productName="product.name"
      :price="product.price"
      buttonText="Add To Cart"
      @addToCart="addToCart(product)"
    />
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
import ProductCard from "~/components/custom/ProductCard.vue";
import { products } from "~/data/products";

const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
};
</script>  
