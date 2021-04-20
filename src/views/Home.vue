<template>
  <div>
    <NavBar home/>
    <div class="container mx-auto w-full md:w-9/12 md:p-4 mt-14">
      <h1 class="px-2 md:px-0 text-3xl lg:text-42px text-grid1 text-center font-semibold">
        L’alimentation c’est notre affaire
      </h1>
      <h1 class="px-2 md:px-0 text-2xl text-grid1 text-center">
        Vos courses chez vous en un clic
      </h1>
      <section class="flex items-center mx-auto w-full md:w-3/4 md:space-x-4 mt-4 mb-2 px-2 md:px-0">
        <div class="flex-initial">
          <custom-select
            v-model="choiceDelivery"
            :data="[
              {
                label: 'Delivery',
                icon: 'bike'
              },
              {
                label: 'Pickup',
                icon: 'walk'
              }
            ]">
          </custom-select>
        </div>
        <div class="flex-1">
          <custom-autocomplet-home
            :data="[
              {
                label: 'Rue du Monument',
                subLabel: 'Ottignies-Louvain-La-Neuve, Belgium'
              },
              {
                label: 'Rue du Monument',
                subLabel: 'Hotton, Belgium'
              },
              {
                label: 'Rue du Monument',
                subLabel: 'Tintigny, Belgium'
              },
              {
                label: 'Rue du Monument',
                subLabel: 'Esneux, Belgium'
              }
            ]"/>
        </div>
      </section>
      <div class="px-2 md:hidden">
        <button class="bg-gradient-to-r from-grid2 to-grid1 py-2 px-4 rounded text-white w-full">
          Search
        </button>
      </div>
      <div class="text-center text-xs text-grid7 mt-3.5">
        <a class="text-red-700">Log in</a> for recent addresses
      </div>
      <section class="my-16">
        <div class="flex overflow-x-auto lg:overflow-hidden md:space-x-4 lg:justify-center md:mb-0 py-0 md:py-2.5">
          <div v-for="(item, i) in itemsAction" :key="i">
            <CardAction
              :img="item.img"
              :label="item.label"
              :active="i === 0"/>
          </div>
        </div>
        <div class="flex overflow-x-auto xl:grid xl:grid-cols-3 gap-4 py-2.5">
          <div v-for="(item, i) in itemsProduit" :key="i">
            <CardProduit
              :title="item.title"
              :label="item.label"
              :description="item.description"
              :label-btn="item.labelBtn"
              :img="item.img"
              custom-class="min-w-300 ml-2 md:ml-0"/>
          </div>
        </div>
      </section>
      <section class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-20  justify-center my-20">
        <img class="w-80 md:w-96" src="@/assets/images/illustrations/illustration1.png">
        <div class="w-80 md:w-96 text-center lg:text-left">
          <TabsBar
            :length="3"
            :value="1"/>
          <h1 class="text-xl md:text-3xl font-semibold">
            Commandez et faites vous livrer dans les 3 heures
          </h1>
          <p class="text-sm md:text-base">
            Immédiatement après votre commande, vos produits sont préparés et livrés à votre convenance.
          </p>
        </div>
      </section>
      <section class="mb-20">
        <div class="text-center">
          <h1 class="text-xl md:text-3xl font-semibold">
            Notre choix pour vous
          </h1>
          <TabsBar
            :length="3"
            :value="2"
            class="mb-5"/>
        </div>
        <div class="flex overflow-x-auto xl:grid xl:grid-cols-3 gap-4 py-2.5 ">
          <div v-for="(item, i) in itemsProduit" :key="i">
            <CardProduit
              :title="item.title"
              :label="item.label"
              :description="item.description"
              :label-btn="item.labelBtn"
              :img="item.img"
              custom-class="min-w-300"/>
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
import CustomSelect from '../components/custom-form/CustomSelect.vue'
import CustomAutocompletHome from '../components/custom-form/CustomAutocompletHome.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    CardAction,
    CardProduit,
    TabsBar,
    Footer,
    CustomSelect,
    CustomAutocompletHome
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
          title: 'Boucherie Uccle Marvelstraat De Paris Le grand',
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
      choiceDelivery: 0
    }
  }
}
</script>
