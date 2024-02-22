<template>
  <v-carousel cycle height="400" hide-delimiter-background class="w-100 mt-10" show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img cover class="bg-grey-lighten-2" :src="slide"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import img1 from '@/assets/img/carousel-imgs/1.jpg';
import img2 from '@/assets/img/carousel-imgs/2.jpg';
import img3 from '@/assets/img/carousel-imgs/3.jpg';
export default {
  data() {
    return {
      slides: [img1, img2, img3]
    }
  }
}
</script>
