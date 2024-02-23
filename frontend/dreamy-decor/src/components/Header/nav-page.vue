<template>
  
    <v-app-bar>
      <template v-slot:prepend> </template>

      <v-app-bar-title>Dreamy Decor Lines</v-app-bar-title>

      <template v-slot:append>
        <RouterLink to="/products" class="mr-5">Produtos</RouterLink>
        <RouterLink to="/resume" >
          <v-badge :content="cartItems" color="error">
            <svg-icon type="mdi" :path="bag" to="/resume"></svg-icon>
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
    // Adiciona um ouvinte para o evento 'storage'
    window.addEventListener('storage', this.handleStorageChange);
    
    // Inicialmente, obtém o conteúdo atual do localStorage
    this.quantity_card = localStorage.getItem('itemChave');
  },
  methods:{
    handleStorageChange(event) {
      // Verifica se a mudança foi para a chave específica que você está observando
      if (event.key === 'quantity_cart') {
        // Atualiza o conteúdo do localStorage no componente
        this.quantity_card = event.newValue;
        
        // Faça outras ações conforme necessário
        console.log('Mudança no Local Storage detectada:', event.newValue);
      }
    }
  }
}
</script>
