<template>
  <div>
    <NavBar/>
    <div class="container mx-auto w-full md:w-9/12 p-4">
      <h1 class="text-4xl text-grid1 text-center font-medium">
        L’alimentation c’est notre affaire
      </h1>
      <h1 class="text-2xl text-grid1 text-center">
        Vos courses chez vous en un clic
      </h1>
      <section class="flex items-center mx-auto w-full md:w-3/4 md:space-x-4 mt-4 mb-2">
        <div class="flex-initial p-4 rounded-xl shadow-box1 hidden md:flex items-center">
          <span class="mr-1 text-gray-400">
            <i class="mdi mdi-bike"></i>
          </span>
          <input
            class="flex-1 border border-transparent focus:outline-none focus:border-transparent"
            placeholder="Delivery">
        </div>
        <div class="flex-1 p-2 rounded-xl shadow-box1 flex items-center">
          <span class="mr-1 text-gray-400">
            <i class="mdi mdi-send"></i>
          </span>
          <input
            class="flex-1 border border-transparent focus:outline-none focus:border-transparent"
            placeholder="Adresse, ville ou code postal">
          <button class="flex-initial bg-gradient-to-r from-grid2 to-grid1 py-2 px-4 rounded text-white hidden md:block">
            Search
          </button>
        </div>
      </section>
      <button class="bg-gradient-to-r from-grid2 to-grid1 py-2 px-4 rounded text-white md:hidden w-full">
        Search
      </button>
      <div class="text-center">
        <a class="text-red-700">Log in</a> for recent addresses
      </div>
      <section class="my-20">
        <div class="flex flex-nowrap overflow-x-auto md:overflow-hidden space-x-4 justify-center mb-4">
          <div class="flex-initial" v-for="(item, i) in itemsAction" :key="i">
            <CardAction
              :img="item.img"
              :label="item.label"/>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
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
      <section class="flex flex-col md:flex-row items-center space-x-0 md:space-x-20  justify-center my-20">
        <img class="w-96" src="@/assets/images/illustrations/illustration1.svg">
        <div class="w-96 justify-center">
          <TabsBar
            :length="3"
            :value="1"/>
          <h1 class="text-3xl font-medium">
            Commandez et faites vous livrer dans les 3 heures
          </h1>
          <p>
            Immédiatement après votre commande, vos produits sont préparés et livrés à votre convenance.
          </p>
        </div>
      </section>
      <section class="mb-20">
        <div class="text-center">
          <h1 class="text-3xl font-medium">
            Notre choix pour vous
          </h1>
          <TabsBar
            :length="3"
            :value="2"
            class="mb-5"/>
        </div>
        <div class="grid grid-cols-3 gap-4">
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
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
import CardAction from '@/components/general/CardAction.vue'
import CardProduit from '@/components/general/CardProduit.vue'
import TabsBar from '@/components/general/TabsBar.vue'
import Footer from '@/components/general/Footer.vue'

import Bakery from '@/assets/images/icons/bakery.svg'
import Butchers from '@/assets/images/icons/butchers.svg'
import Fishstores from '@/assets/images/icons/fishstores.svg'
import Restaurants from '@/assets/images/icons/restaurants.svg'
import Supermarkets from '@/assets/images/icons/supermarkets.svg'

import Boucherie from '@/assets/images/boucherie.png'
import Boucherie2 from '@/assets/images/boucherie2.png'
import Boucherie3 from '@/assets/images/boucherie3.png'

export default {
  name: 'Home',
  components: {
    NavBar,
    CardAction,
    CardProduit,
    TabsBar,
    Footer
  },
  data () {
    return {
      itemsAction: [
        {
          label: 'Butchers',
          img: Butchers
        },
        {
          label: 'Supermarkets',
          img: Supermarkets
        },
        {
          label: 'Fish stores',
          img: Fishstores
        },
        {
          label: 'Bakery',
          img: Bakery
        },
        {
          label: 'Restaurants',
          img: Restaurants
        }
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
        }
      ]
    }
  }
}
</script>
