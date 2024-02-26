<template>
  <div>
    <RouterView />
    <Navbar></Navbar>
    <v-container>
      <v-row>
        <v-select
          v-model="selectedCategory"
          :items="categories"
          item-title="name"
          item-value="id"
          class="mt-5"
          label="Filtre por categorias"
          @update:modelValue="filterProducts"        
      ></v-select>
      </v-row>
      <v-row class="product-row">
        <v-col v-for="product in products" :key="product.id">
          <v-card class="product-card">
            <v-img src="https://cdn.encontreofabricante.com.br/media/categories/cama_mesa_e_banho-min.png" aspect-ratio="16/9">
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
import CartProductService from '@/services/models/CartProductService'

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
        products: [],
        valueTotal: 0
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
      this.cart.products.push(product);
      
      this.cart.valueTotal = parseInt(product.price) + this.cart.valueTotal;
      console.log('produto', this.cart.valueTotal);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.addToCart(this.cart.products.length);


      CartProductService.post({product: product.id, cart: 1, quantity: this.cart.products.length})
        .then((response) => {
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        });
     
    }    
  }
}
</script>
<style>
.v-container {
  margin-top: 10vh;
  width: 90vw;
  color: #6f3519;
}
.product-row {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  margin-bottom: 5vh;
}
.v-card {
  min-height: 100%;
  width: 15vw;
}
</style>
