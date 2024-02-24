<template>
  <div>
    <Navbar></Navbar>
    <v-container class="mt-15" >
      
        <h2>Resumo de compras</h2>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Item
              </th>
              <th class="text-left">
                Preço
              </th>
              <th class="text-left">
                Quantidade
              </th>
              <th class="text-left">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in products"
              :key="item.produto.id"
            >
              <td>{{ item.produto.name }}</td>
              <td>{{ item.produto.price }}</td>
              <td>{{ item.quantidade }}</td>
              <td><svg-icon type="mdi" :path="ic_add"></svg-icon><svg-icon type="mdi" :path="ic_minus" @click="removerProduto(item.produto.id)"> </svg-icon></td>
            </tr>
          </tbody>
        </v-table>      
        <span>Valor total da compra: {{ this.cart.valueTotal }} R$</span>
    </v-container>
    
  </div>
</template>
<script>
import Navbar from '@/components/Header/nav-page.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMinusThick, mdiPlusThick } from '@mdi/js';

export default {
  components: {
    Navbar,
    SvgIcon
  },
  data: () => ({
    products: [],
    cart: {
      valueTotal: 0
    },
    ic_minus: mdiMinusThick,
    ic_add: mdiPlusThick
  }),
  created() {
    console.log('created', localStorage.getItem('cart'))
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'));
      console.log("carrinho inicio");
      let items = JSON.parse(localStorage.getItem('cart'));
      this.products = this.agruparProdutos(items.products);
    
    }
    
  },
  methods:{
    agruparProdutos(produtos) {
      const grupos = {};
      produtos.forEach(produto => {
          if (grupos[produto.id]) {
              grupos[produto.id].quantidade++;
          } else {
              grupos[produto.id] = {
                  produto: produto,
                  quantidade: 1
              };
          }
      });
      return Object.values(grupos);
    },
    removerProduto(id){
      this.products.map((item)=>{
        console.log("produto", item);
        if(item.produto.id === id && item.quantidade > 1){
          item.quantidade--;
          this.cart.products = this.products;
          console.log("TOTAL DA COMPRA", item);
          this.cart.valueTotal = this.cart.valueTotal - parseInt(item.produto.price); 
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }else{
          const index = this.products.findIndex(produto => produto.id === id);
          if (index !== -1) {
            this.products.splice(index, 1);
            this.products = [...this.products];
            this.cart.products = this.products;
            localStorage.setItem('cart', JSON.stringify(this.cart));
            console.log(`Produto com ID ${this.products} removido com sucesso.`);
          } else {
              console.log(`Produto com ID ${id} não encontrado.`);
          }
        }
      });
    }

  }
}
</script>
<style scoped>
  .v-container{
    margin: 0 auto;
    width: 80vw;
    color: #6f3519;
  }
</style>
