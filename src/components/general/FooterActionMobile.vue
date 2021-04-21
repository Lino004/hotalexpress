<template>
  <div
    class="md:hidden bottom-0 w-full bg-white"
    :class="{
      fixed: fixed
    }">
    <div
      class="flex items-center justify-between px-5 py-2 text-xs font-medium">
      <div class="flex-1">
        €0,00 · 0 Articles
      </div>
      <div class="text-base" @click="showResume = modalMobileOpen = true">
        <span>
          <i class="mdi mdi-chevron-up"></i>
        </span>
      </div>
      <div class="flex-1 text-right" @click="showDeliveryDetails = modalMobileOpen = true">
        Delivery
      </div>
    </div>
    <hr class="text-grid5">
    <div class="flex justify-between px-5 py-2 text-10px text-grid7">
      <div>0 Articles</div>
      <div class="flex-none w-1/3 text-right">
        Rue de Brabant 230 As soon as possible
      </div>
    </div>
    <div class="fixed z-20 w-full h-full bg-white top-0" v-if="showResume">
      <card-resume
        is-mobile
        @back="showResume = modalMobileOpen = false"
        @close="showResume = modalMobileOpen = false"
        @go-to-checkout="showResume = modalMobileOpen = false"/>
    </div>
    <div class="fixed z-20 w-full h-full bg-white top-0" v-if="showDeliveryDetails">
      <delivery-details
        is-mobile
        @update="showDeliveryDetails = modalMobileOpen = false"
        @close="showDeliveryDetails = modalMobileOpen = false"/>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CardResume from '@/components/produit/CardResume.vue'
import DeliveryDetails from '@/components/cardResumeMobile/DeliveryDetails.vue'

const Menu = createNamespacedHelpers('menu')

export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  components: {
    CardResume,
    DeliveryDetails
  },
  data () {
    return {
      showResume: false,
      showDeliveryDetails: false
    }
  },
  computed: {
    ...Menu.mapGetters({
      getModalMobileOpen: 'modalMobileOpen'
    }),
    modalMobileOpen: {
      get () {
        return this.getModalMobileOpen
      },
      set (val) {
        this.setModalMobileOpen(val)
      }
    }
  },
  methods: {
    ...Menu.mapMutations({
      setModalMobileOpen: 'SET_MODAL_MOBILE_OPEN'
    })
  }
}
</script>

<style>

</style>
