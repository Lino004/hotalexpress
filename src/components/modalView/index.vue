<template>
  <div class="fixed top-0 w-screen h-screen z-30 flex bg-grid15" v-if="list.length">
    <div class="flex-1" @click="resetListModalView"></div>
    <div class="flex-none w-full md:w-96 bg-grid9 relative">
      <component
        v-for="(name, i) in list"
        :key="i"
        :is="name"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CountryLanguage from '@/components/cardResumeMobile/CountryLanguage'
import DeliveryDetails from '@/components/cardResumeMobile/DeliveryDetails'
import DeliveryAddress from '@/components/cardResumeMobile/DeliveryAddress'
import DeliveryTime from '@/components/cardResumeMobile/DeliveryTime'
import CardResume from '@/components/produit/CardResume'
import MenuApp from './Menu'

export default {
  components: {
    MenuApp,
    CountryLanguage,
    DeliveryAddress,
    DeliveryDetails,
    DeliveryTime,
    CardResume
  },
  computed: {
    ...mapGetters({
      list: 'listModalViewComponent'
    })
  },
  methods: {
    ...mapMutations({
      resetListModalView: 'RESET_LIST_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
