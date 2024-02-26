<template>
  <div>
    <Navbar></Navbar>
    <v-container class="mt-15">
      <h2>Resumo de compras</h2>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Item</th>
            <th class="text-left">Preço</th>
            <th class="text-left">Quantidade</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.produto.id">
            <td>{{ item.produto.name }}</td>
            <td>{{ item.produto.price }}</td>
            <td>{{ item.quantidade }}</td>
            <td>
              <svg-icon type="mdi" :path="ic_add" @click="adicionarProduto(item.produto.id)"></svg-icon
              ><svg-icon type="mdi" :path="ic_minus" @click="removerProduto(item.produto.id)">
              </svg-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
      <span>Valor total da compra: {{ this.cart.valueTotal }} R$</span>
    </v-container>
  </div>
</template>
<script>
import Navbar from '@/components/Header/nav-page.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMinusThick, mdiPlusThick } from '@mdi/js'
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  components: {
    Navbar,
    SvgIcon
  },
  computed: {
    ...mapState(['cartItems'])
  },
  data: () => ({
    products: [],
    cart: {
      valueTotal: 0,
      quantity_card: localStorage.getItem('quantity_cart')
    },
    quantity_card: localStorage.getItem('quantity_cart'),
    ic_minus: mdiMinusThick,
    ic_add: mdiPlusThick
  }),
  created() {
    window.addEventListener('storage', this.handleStorageChange);
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'))
      let items = JSON.parse(localStorage.getItem('cart'))
      this.products = this.agruparProdutos(items.products)
    }
  },
  methods: {
    handleStorageChange(event) {
      console.log('Mudança no Local Storage detectada:', event.newValue);
      if (event.key === 'quantity_cart') {
        this.quantity_card = event.newValue;
      }
    },
    agruparProdutos(produtos) {
      const grupos = {}
      produtos.forEach((produto) => {
        if (grupos[produto.id]) {
          grupos[produto.id].quantidade++
        } else {
          grupos[produto.id] = {
            produto: produto,
            quantidade: 1
          }
        }
      })
      return Object.values(grupos)
    },
    ...mapActions(['addToCart']),
    removerProduto(id) {
      this.products.map((item) => {
        if (item.produto.id === id && item.quantidade > 1) {
          item.quantidade--;
          this.cart.products = this.products;
          this.cart.valueTotal = this.cart.valueTotal - parseInt(item.produto.price);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        } else {
          const index = this.products.findIndex((produto) => produto.id === id);
          if (index !== -1) {
            this.products.splice(index, 1);
            this.products = [...this.products];
            this.cart.products = this.products;
            localStorage.setItem('cart', JSON.stringify(this.cart));
          } else {
            console.log(`Produto com ID ${id} não encontrado.`);
          }
        }
      })
    },
    adicionarProduto(id) {
      this.products.map((item) => {
        if (item.produto.id === id) {
          item.quantidade++;
          this.cart.products = this.products;
          this.quantity_card = this.quantity_card++;
          this.addToCart(this.quantity_card);
          this.cart.valueTotal = this.cart.valueTotal + parseInt(item.produto.price);
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      })
    }
  }
}
</script>
<style scoped>
.v-container {
  margin: 0 auto;
  width: 80vw;
  color: #6f3519;
}
</style>
