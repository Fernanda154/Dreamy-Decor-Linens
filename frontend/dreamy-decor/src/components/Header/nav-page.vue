<template>
  
    <v-app-bar>
      <template v-slot:prepend> </template>
      <v-app-bar-title @click="toHome()" >Dreamy Decor Lines</v-app-bar-title>
      <template v-slot:append>
        <RouterLink to="/products" class="mr-5">Produtos</RouterLink>
        <RouterLink to="/resume" >
          <v-badge :content="cartItems" color="error">
            <svg-icon type="mdi" :path="bag"  to="/resume"></svg-icon>
          </v-badge>
        </RouterLink>
        <svg-icon type="mdi" :path="user" class="ml-5"></svg-icon>
      </template>
    </v-app-bar>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiShoppingOutline, mdiAccount } from '@mdi/js'
import { RouterLink } from 'vue-router';
import { mapState } from 'vuex';

export default {
  components: {
    SvgIcon,
    RouterLink
  },
  computed: {
    ...mapState(['cartItems'])
  },
  data() {
    return {
      bag: mdiShoppingOutline,
      user: mdiAccount,
      quantity_card: localStorage.getItem('quantity_cart')
    }
  },
  created() {
    window.addEventListener('storage', this.handleStorageChange);
    
    this.quantity_card = localStorage.getItem('itemChave');
  },
  methods:{
    handleStorageChange(event) {
      if (event.key === 'quantity_cart') {
        this.quantity_card = event.newValue;
        localStorage.setItem('itemChave', event.newValue);
        console.log('Mudança no Local Storage detectada:', event.newValue);
      }
    },
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>
