<template>
  <div
    class="container mx-auto p-4 bg-brown max-w-xs lg:max-w-xs rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
  >
    <img
      :src="imageUrl"
      :alt="productName"
      class="rounded-xl w-full object-cover -translate-y-14"
    />
    <div class="flex justify-between items-center mt-4">
      <div class="text-wheat">
        <h1 class="text-primary font-semibold">{{ productName }}</h1>
        <p class="mt-1 text-secondary text-gray-600">{{ price }}$</p>
      </div>
      <div>
        <button
          @click="addToCart"
          class="text-wheat text-sm md:text-md font-semibold bg-darkBrown py-2 px-3 md:px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform hover:scale-110"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: ["imageUrl", "productName", "price", "addToCart"],

  setup(props, { emit }) {
    const { imageUrl, productName, price } = toRefs(props);

    const addToCart = () => {
      emit("add-to-cart");
    };

    return {
      imageUrl,
      productName,
      price,
      addToCart,
    };
  },
});
</script>
