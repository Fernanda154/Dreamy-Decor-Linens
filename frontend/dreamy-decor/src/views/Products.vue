<template>
  <div>
    <RouterView />
    <Navbar></Navbar>
    <v-container>
      <v-select
        v-model="selectedCategory"
        :items="categories"
        item-title="name"
        item-value="id"
        label="Filtre por categorias"
        @update:modelValue="filterProducts"
        
        
      ></v-select>
      <v-row class="product-row">
        <v-col v-for="product in products" :key="product.id">
          <v-card class="product-card">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" aspect-ratio="16/9">
              <v-btn :icon="iconCartHeart || 0" @click="addProductToCart(product)"></v-btn>
            </v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Navbar from '@/components/Header/nav-page.vue'
import ProductService from '@/services/models/ProductService.js'
import CategoryService from '@/services/models/CategoryService.js'
import { mdiCartHeart } from '@mdi/js'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      selectedCategory: null, 
      products: [],
      categories: [],
      iconCartHeart: mdiCartHeart,
      cart: {
        products: []
      }
    }
  },
  created() {
    this.getProducts()
    this.getCategories()
  },
  methods: {
    getProducts() {
      ProductService.getAll()
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    filterProducts() {
      console.log(this.selectedCategory, "aqui")
      ProductService.getWithFilter(this.selectedCategory)
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getCategories() {
      CategoryService.getAll()
        .then((response) => {
          this.categories = response.data
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    ...mapActions(['addToCart']),
    addProductToCart(product) {
      this.cart.products.push(product)
      this.cart.valueTotal += product.price
      localStorage.setItem('cart', this.cart)
      this.addToCart(this.cart.products.length)
    }
  }
}
</script>
<style>
.v-container {
  margin-top: 10vh;
  color: #6f3519;
}
.product-row {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  margin-bottom: 20px;
}
.v-card {
  min-height: 100%;
}
</style>
