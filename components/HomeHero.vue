<template>
  <div class="relative flex justify-center items-center h-screen">
    <img
      src="/public/imgs/hero.jpg"
      alt="Hero Image"
      class="object-cover w-full h-full"
    />
    <h1
      class="absolute text-center text-primary  bg-wheat text-darkBrown px-4 py-2 typing-effect max-w-xl w-full"
    >
      Welcome to our shop...
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-effect {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  width: 0;
  animation: typing 4s steps(30, end) infinite;
}
</style>
