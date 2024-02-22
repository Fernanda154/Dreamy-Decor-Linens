<template>
  <v-layout>
    <v-app-bar>
      <template v-slot:prepend> </template>

      <v-app-bar-title>Dreamy Decor Lines</v-app-bar-title>

      <template v-slot:append>
        <v-badge content="9+" color="error">
          <svg-icon type="mdi" :path="bag" ></svg-icon>
        </v-badge>

        <svg-icon type="mdi" :path="user" class="ml-5"></svg-icon>
      </template>
    </v-app-bar>
  </v-layout>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiShoppingOutline, mdiAccount } from '@mdi/js'

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      bag: mdiShoppingOutline,
      user: mdiAccount
    }
  }
}
</script>
