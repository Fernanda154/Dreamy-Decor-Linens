<template>
  <Navbar></Navbar>
  <Carousel></Carousel>
</template>
<script>
    import Navbar from '@/components/Header/nav-page.vue';
    import Carousel from '@/components/HomeCarousel/home-carousel.vue';

    export default {
      components: {
        Navbar,
        Carousel
      },
      
    }
</script>
<style scoped>
</style>
<style scoped>
  .v-carousel {
    height: 400px;
    min-width: 100vw;
  }
</style>