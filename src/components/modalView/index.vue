<template>
  <div class="fixed top-0 w-screen h-screen z-30 flex bg-grid15" v-if="list.length">
    <div class="flex-1" @click="resetListModalView"></div>
    <div class="flex-none w-full md:w-96 relative">
      <!-- <transition-group
        enter-active-class="animated fadeInRightBig"
        leave-active-class="animated fadeOutRightBig"
        :duration="{ enter: 3500, leave: 3800 }"> -->
        <component
          v-for="(name) in list"
          :key="name"
          :is="name"/>
      <!-- </transition-group> -->
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
import MenuSingupLogin from './MenuSingupLogin'

export default {
  components: {
    MenuApp,
    MenuSingupLogin,
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
