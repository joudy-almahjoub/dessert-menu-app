<template>
  <div>
    <div class="min-h-screen flex flex-col bg-wheat">
      <NavBar />
      <main>
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "~/components/Footer.vue";
import NavBar from "~/components/Navbar.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
</style>