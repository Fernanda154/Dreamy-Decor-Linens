<template>
  
    <v-app-bar>
      <template v-slot:prepend> </template>

      <v-app-bar-title>Dreamy Decor Lines</v-app-bar-title>

      <template v-slot:append>
        <RouterLink to="/products" class="mr-5">Produtos</RouterLink>
        <v-badge content="9+" color="error">
          <svg-icon type="mdi" :path="bag" ></svg-icon>
        </v-badge>

        <svg-icon type="mdi" :path="user" class="ml-5"></svg-icon>
      </template>
    </v-app-bar>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiShoppingOutline, mdiAccount } from '@mdi/js'
import { RouterLink } from 'vue-router';
export default {
  components: {
    SvgIcon,
    RouterLink
  },
  data() {
    return {
      bag: mdiShoppingOutline,
      user: mdiAccount
    }
  }
}
</script>
