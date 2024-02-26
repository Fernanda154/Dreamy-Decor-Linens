<template>
  <div>
    <Navbar></Navbar>
    <v-container >
      <v-row >
        <Carousel></Carousel>
      </v-row>     
      <v-row >
        <v-col>
          <GridCategories></GridCategories>
        </v-col>
        <v-col class="pt-10">
          <h2>Traga mais aconchego para sua casa!</h2>
        </v-col>
        
      </v-row>
    </v-container>
  </div>
     
</template>
<script>
    import Navbar from '@/components/Header/nav-page.vue';
    import Carousel from '@/components/Home/HomeCarousel/home-carousel.vue';
    import GridCategories from '@/components/Home/GridCategories/grid-categories.vue';
    
    export default {
      components: {
        Navbar,
        Carousel,
        GridCategories
      },
      
      
    }
</script>

<style scoped>
  .v-carousel {
    height: 400px;
    min-width: 100vw;
  }
  h2{
    color: #583d27;
  }
  
</style>