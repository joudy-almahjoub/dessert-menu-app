<template>
  <header
    class="sticky top-0 z-10 bg-darkBrown text-wheat shadow-md flex items-center justify-between px-4 py-2"
  >
    <h1 class="w-3/12 text-xl hover:text-pink duration-200">
      <a href="">Dessert Shop</a>
    </h1>

    <!-- menu icon -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <svg
        class="svg-inline--fa fa-bars fa-w-20 h-8 text-wheat"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M80 192h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 128h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 128h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
        ></path>
      </svg>
    </button>

    <!-- large screens -->
    <nav class="nav font-semibold text-lg hidden md:block">
      <ul class="flex items-center">
        <li
          v-for="item in navLinks"
          :key="item.href"
          class="p-4 border-b-2 border-transparent hover:border-pink hover:text-pink transition-all duration-200 cursor-pointer"
        >
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- small screens -->
    <div
      v-if="isMenuOpen"
      class="absolute top-16 left-0 right-0 bg-darkBrown md:hidden flex flex-col items-center"
    >
      <ul class="flex flex-col w-full">
        <li
          v-for="item in navLinks"
          :key="item.href"
          class="p-4 text-center border-b-2 border-wheat hover:text-pink duration-200 cursor-pointer"
        >
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="w-3/12 flex justify-end">
      <div class="relative" v-if="itemsLength">
        <p
          class="bg-pink text-wheat rounded-full px-3 py-1 text-sm font-semibold"
        >
          {{ itemsLength }}
        </p>
      </div>
      <button @click="openCartDrawer" class="focus:outline-none">
        <svg
          class="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x h-8 p-1 hover:text-pink duration-200"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="shopping-cart"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
          ></path>
        </svg>
      </button>
    </div>
    <CartDrawer :isOpen="isCartOpen" @close="closeCartDrawer" />
  </header>
</template>
<script setup>
import { ref } from "vue";
import CartDrawer from "~/components/Cart.vue";

const navLinks = ref([
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "#footer" },
]);
const isMenuOpen = ref(false);

const cartStore = useCartStore();
const isCartOpen = ref(false);
const itemsLength = computed(() => cartStore.items.length);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function openCartDrawer() {
  isCartOpen.value = true;
}

function closeCartDrawer() {
  isCartOpen.value = false;
}
</script>
