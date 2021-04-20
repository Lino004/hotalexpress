<template>
  <div>
    <NavBar/>
    <div>
      <figure class="relative">
        <img width="100%" class="h-32 md:h-72 object-cover" :src="produit.img" alt="">
        <div class="absolute bottom-0 w-full">
          <div class="container mx-auto w-full md:w-9/12 text-white text-1 md:text-4xl py-2">
            HalalBoucherie.be
          </div>
        </div>
      </figure>
    </div>
    <section class="container mx-auto w-full md:w-9/12 p-4">
      <div class="text-sm font-medium pb-1">
        4.9 (500+ Reviews)
      </div>
      <div class="text-sm text-grid1 font-medium">
        Butcher • Delivery in 3 hours • Click’n collect
      </div>
      <div class="text-sm font-medium">
        Rue des palais 308, Schaerbeek, 1030 Brussels • <a class="font-semibold underline">More information</a>
      </div>
    </section>
    <section class="border-t border-b border-grid5 bg-white md:sticky top-0 z-10">
      <div class="container mx-auto w-full md:w-9/12 p-4 flex space-x-4 relative">
        <button
          class="text-sm focus:outline-none"
          v-for="(item, i) in itemCategorie" :key="i"
          :class="{
            'underline font-medium': i === currentItemCategorie,
            'text-grid8': i !== currentItemCategorie,
          }"
          @click="currentItemCategorie = i">
          {{item}}
        </button>
        <div class="absolute w-1/3 right-0 shadow-box1 bg-white hidden lg:block">
          <card-resume/>
        </div>
      </div>
    </section>
    <collapse
      v-for="(item, i) in itemSubProduit"
      :key="i"
      :data="item"/>
    <Footer show-footer-action-mobile/>
    <FooterActionMobile/>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import Collapse from '@/components/produit/Collapse.vue'
import Footer from '@/components/general/Footer.vue'
import CardResume from '@/components/produit/CardResume.vue'
import FooterActionMobile from '@/components/general/FooterActionMobile.vue'

import Boucherie from '@/assets/images/boucherie.png'

export default {
  components: {
    NavBar,
    Collapse,
    Footer,
    CardResume,
    FooterActionMobile
  },
  data () {
    return {
      produit: {
        img: Boucherie
      },
      itemCategorie: [
        'Meat',
        'Fish',
        'Vegetables',
        'Bread',
        'Spices'
      ],
      currentItemCategorie: 0,
      itemSubProduit: [
        {
          title: 'Lamb',
          show: true
        },
        {
          title: 'Poultry',
          show: false
        },
        {
          title: 'Beef',
          show: false
        },
        {
          title: 'BBQ',
          show: false
        },
        {
          title: 'Sausage',
          show: false
        },
        {
          title: 'Hamburgers',
          show: false
        }
      ]
    }
  },
  computed: {
    showResume () {
      return this.itemSubProduit.some(el => el.show === true)
    }
  },
  mounted () {}
}
</script>

<style>

</style>
