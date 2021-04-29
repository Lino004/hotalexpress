<template>
  <div>
    <NavBar/>
    <hr class="text-grid5">
    <section
      class="container mx-auto w-full md:w-9/12 p-4 md:p-4 text-center flex flex-nowrap overflow-x-auto md:justify-center bg-white"
      :class="{
        'sticky top-0 z-10': !getModalMobileOpen
      }">
      <button
        class="flex-none rounded-3xl text-sm md:bg-grid5 m-2 font-medium focus:outline-none relative md:hidden"
        :class="{
          'md:bg-grid6': currentItem === i,
          'text-grid8': currentItem !== i
        }"
        v-for="(item, i) in itemCategories" :key="`${i}btn-mobile`"
        @click="currentItem = i"
        >
        <span :active="i === currentItem" class="custom-underline">
          {{item}}
        </span>
      </button>
      <button
        class="flex-none rounded-3xl text-sm md:bg-grid5 p-2 mr-2 font-medium focus:outline-none hidden md:block"
        :class="{
          'md:bg-grid6': currentItem === i,
          'text-grid8': currentItem !== i
        }"
        v-for="(item, i) in itemCategories" :key="`${i}btn`"
        @click="currentItem = i">
        <span>
          {{item}}
        </span>
      </button>
    </section>
    <div class="md:flex justify-center hidden">
      <hr class="text-grid5 w-5/6">
    </div>
    <div class="container mx-auto w-full md:w-9/12 px-4 pt-4 justify-between items-center hidden md:flex">
      <div class="flex items-center space-x-2">
        <label class="text-sm">Delivery method:</label>
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-colors" :value="1" v-model="choiceDelivery">
          <span class="ml-2 text-sm">Delivery</span>
        </label>
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-colors" :value="2" v-model="choiceDelivery">
          <span class="ml-2 text-sm">Click’n collect</span>
        </label>
      </div>
      <div class="text-sm font-medium">
        26 store’s found based on your location
      </div>
    </div>
    <section class="container mx-auto w-full md:w-9/12 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(item, i) in itemsProduit" :key="i">
          <CardProduit
            :title="item.title"
            :label="item.label"
            :description="item.description"
            :label-btn="item.labelBtn"
            :img="item.img"
            :temporaire="item.temporaire"/>
        </div>
      </div>
    </section>
    <Footer show-footer-action-mobile/>
    <FooterActionMobile/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NavBar from '@/components/general/NavBar.vue'
import CardProduit from '@/components/general/CardProduit.vue'
import Footer from '@/components/general/Footer.vue'
import FooterActionMobile from '@/components/general/FooterActionMobile.vue'

import Boucherie from '@/assets/images/boucherie.png'
import Boucherie2 from '@/assets/images/boucherie2.png'
import Boucherie3 from '@/assets/images/boucherie3.png'

const Menu = createNamespacedHelpers('menu')

export default {
  components: {
    NavBar,
    CardProduit,
    Footer,
    FooterActionMobile
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
          labelBtn: 'Closed',
          img: Boucherie2,
          temporaire: true
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
      currentItem: 1,
      choiceDelivery: 1
    }
  },
  computed: {
    ...Menu.mapGetters({
      getModalMobileOpen: 'modalMobileOpen'
    })
  }
}
</script>

<style>

</style>
