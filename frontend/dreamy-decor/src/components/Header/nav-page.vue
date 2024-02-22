<template>
      <v-layout>
        <v-app-bar>
          <template v-slot:prepend>
          </template>
  
          <v-app-bar-title>Dreamy Decor Lines</v-app-bar-title>
  
          <template v-slot:append>
            <svg-icon type="mdi" :path="bag" class="mr-4"></svg-icon>
            <svg-icon type="mdi" :path="user"></svg-icon>
          </template>
        </v-app-bar>
      </v-layout>
  </template>
<script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiShoppingOutline, mdiAccount } from '@mdi/js';

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