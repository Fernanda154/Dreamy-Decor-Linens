<template>
  <RouterView />
  <Navbar></Navbar>
</template>
<script>
import Navbar from '@/components/Header/nav-page.vue';
export default {
      components: {
        Navbar
      }, 
}
</script>