<template>
  <div>
    <NavBar/>
    <hr class="text-grid5">
    <section class="container mx-auto w-full md:w-9/12 p-4 text-center flex md:block flex-nowrap overflow-x-auto">
      <button
        class="rounded-3xl md:bg-grid5 p-2 mr-2 font-medium focus:outline-none"
        :class="{
          'md:bg-grid6': currentItem === i
        }"
        v-for="(item, i) in itemCategories" :key="i">
        {{item}}
      </button>
    </section>
    <div class="flex justify-center">
      <hr class="text-grid5 w-5/6">
    </div>
    <section class="container mx-auto w-full md:w-9/12 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(item, i) in itemsProduit" :key="i">
          <CardProduit
            :title="item.title"
            :label="item.label"
            :description="item.description"
            :label-btn="item.labelBtn"
            :img="item.img"/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import CardProduit from '@/components/general/CardProduit.vue'
import Footer from '@/components/general/Footer.vue'

import Boucherie from '@/assets/images/boucherie.png'
import Boucherie2 from '@/assets/images/boucherie2.png'
import Boucherie3 from '@/assets/images/boucherie3.png'

export default {
  components: {
    NavBar,
    CardProduit,
    Footer
  },
  data () {
    return {
      itemCategories: [
        'All',
        'Butchers',
        'Supermarkets',
        'Fish stores',
        'Bakeries',
        'Restaurants'
      ],
      itemsProduit: [
        {
          label: 'Free Delivery',
          title: 'Boucherie Uccle Marvelstraat',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie2
        },
        {
          label: '€5 Discount',
          title: 'HalalBoucherie.be',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: 'Tomorrow',
          img: Boucherie3
        },
        {
          label: '',
          title: 'Boucherie Hamid Ninove',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie
        },
        {
          label: 'Free Delivery',
          title: 'Boucherie Uccle Marvelstraat',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie2
        },
        {
          label: '€5 Discount',
          title: 'HalalBoucherie.be',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: 'Tomorrow',
          img: Boucherie3
        },
        {
          label: '',
          title: 'Boucherie Hamid Ninove',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie
        },
        {
          label: 'Free Delivery',
          title: 'Boucherie Uccle Marvelstraat',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie2
        },
        {
          label: '€5 Discount',
          title: 'HalalBoucherie.be',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: 'Tomorrow',
          img: Boucherie3
        },
        {
          label: '',
          title: 'Boucherie Hamid Ninove',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie
        },
        {
          label: 'Free Delivery',
          title: 'Boucherie Uccle Marvelstraat',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie2
        },
        {
          label: '€5 Discount',
          title: 'HalalBoucherie.be',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: 'Tomorrow',
          img: Boucherie3
        },
        {
          label: '',
          title: 'Boucherie Hamid Ninove',
          description: 'Butcher · Delivery in 3 hours · Click’n collect · 4.8 (500+ Reviews)',
          labelBtn: '3 Hours',
          img: Boucherie
        }
      ],
      currentItem: 1
    }
  }
}
</script>

<style>

</style>
