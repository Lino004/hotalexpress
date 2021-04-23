<template>
  <div
    class="md:hidden bottom-0 w-full bg-white" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    :class="{
      fixed: fixed
    }">
    <div
      class="flex items-center justify-between px-5 py-2 text-xs font-medium">
      <div class="flex-1">
        €0,00 · 0 Articles
      </div>
      <div class="text-base" @click="addToModalView('CardResume')">
        <span>
          <i class="mdi mdi-chevron-up"></i>
        </span>
      </div>
      <div class="flex-1 text-right">
        <a @click="addToModalView('DeliveryDetails')">Delivery</a>
      </div>
    </div>
    <hr class="text-grid5">
    <div class="flex justify-between px-5 py-2 text-10px text-grid7">
      <div>0 Articles</div>
      <div class="flex-none w-1/3 text-right">
        Rue de Brabant 230 As soon as possible
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapMutations } from 'vuex'

const Menu = createNamespacedHelpers('menu')

export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  components: {
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
    ...mapMutations({
      addToModalView: 'ADD_TO_MODAL_VIEW'
    }),
    ...Menu.mapMutations({
      setModalMobileOpen: 'SET_MODAL_MOBILE_OPEN'
    })
  }
}
</script>

<style>

</style>
