<template>
  <v-card class="ml-2 mt-2" min-width="500">
    <v-container>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import img1 from '@/assets/img/grid-category-imgs/1.jpg'
import img2 from '@/assets/img/grid-category-imgs/2.jpg'
import img3 from '@/assets/img/grid-category-imgs/3.jpg'
export default {
  data: () => ({
    cards: [
      { title: 'Cama', src: img2, flex: 12 },
      { title: 'Banho', src: img1, flex: 6 },
      { title: 'Mesa', src: img3, flex: 6 }
    ]
  })
}
</script>
