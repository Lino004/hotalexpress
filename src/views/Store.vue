<template>
  <div>
    <NavBar/>
    <div>
      <figure class="relative">
        <img width="100%" class="h-32 md:h-72 object-cover" :src="produit.img" alt="">
        <div class="absolute bottom-0 w-full">
          <div class="container mx-auto w-full md:w-9/12 text-white text-1 md:text-4xl py-2 px-4 font-semibold md:font-normal">
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
    <section class="border-t border-b border-grid5 bg-white"
      :class="{
        'sticky top-0 z-10': !getModalMobileOpen
      }">
      <div class="container mx-auto w-full md:w-9/12 p-4 flex space-x-4 relative">
        <button
          class="text-sm focus:outline-none relative custom-underline"
          v-for="(item, i) in itemCategorie" :key="i"
          :class="{
            'font-medium': i === currentItemCategorie,
            'text-grid8': i !== currentItemCategorie,
          }"
          :active="i === currentItemCategorie"
          @click="currentItemCategorie = i">
          <span>
            {{item.name}}
          </span>
        </button>
        <div class="absolute w-1/3 right-0 shadow-box1 bg-white hidden lg:block">
          <card-resume/>
        </div>
      </div>
    </section>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      v-for="(cat, i) in itemCategorie" :key="i">
      <div v-if="i === currentItemCategorie">
        <collapse
          v-for="(item, i) in cat.items"
          :key="`${i}listcat`"
          :data="item"/>
      </div>
    </transition>
    <Footer show-footer-action-mobile/>
    <FooterActionMobile/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NavBar from '@/components/general/NavBar.vue'
import Collapse from '@/components/produit/Collapse.vue'
import Footer from '@/components/general/Footer.vue'
import CardResume from '@/components/produit/CardResume.vue'
import FooterActionMobile from '@/components/general/FooterActionMobile.vue'

import Boucherie from '@/assets/images/boucherie.png'

const Menu = createNamespacedHelpers('menu')

const itemDefault = [
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
        {
          name: 'Meat',
          items: itemDefault
        },
        {
          name: 'Fish',
          items: itemDefault
        },
        {
          name: 'Vegetables',
          items: itemDefault
        },
        {
          name: 'Bread',
          items: itemDefault
        },
        {
          name: 'Spices',
          items: itemDefault
        }
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
    ...Menu.mapGetters({
      getModalMobileOpen: 'modalMobileOpen'
    })
  },
  mounted () {}
}
</script>

<style>

</style>
