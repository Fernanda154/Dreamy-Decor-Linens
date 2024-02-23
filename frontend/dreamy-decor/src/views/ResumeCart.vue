<template>
  <div>
    <Navbar></Navbar>
    <v-card class="mx-auto" max-width="300">
      <v-list :items="products" item-title="name" item-value="price"></v-list>
    </v-card>
  </div>
</template>
<script>
import Navbar from '@/components/Header/nav-page.vue'
export default {
  components: {
    Navbar
  },
  data: () => ({
    products: []
  }),
  created() {
    console.log('created', localStorage.getItem('cart'))
    if(localStorage.getItem('cart')){
      console.log('created2', localStorage.getItem('cart'))
      let items = localStorage.getItem('cart');
      console.log('created3', items)
      if (items) {
        this.products = items.products;
      }
    }
    
  }
}
</script>
