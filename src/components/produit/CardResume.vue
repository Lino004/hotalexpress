<template>
  <transition :leave-active-class="`animated ${$device.mobile ? 'fadeOutDown' : 'fadeOutDown'}`">
  <div class="relative h-full flex flex-col bg-white"
      :class="{
        'animated fadeInUp': !$device.mobile,
        'animated fadeInUp': $device.mobile
      }">
    <div class="flex-1 overflow-y-auto">
      <div class="flex p-4 justify-between">
        <h4 class="font-semibold">
          My Basket
        </h4>
        <button class="md:hidden" @click="removeToModalView('CardResume')">
          <span>
            <i class="mdi mdi-close"></i>
          </span>
        </button>
      </div>
      <hr class="text-grid5">
      <div class="p-4">
        <div class="flex justify-between items-start mb-4">
          <div class="mr-4 w-16 flex justify-between items-center">
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-minus-circle-outline"></i>
              </span>
            </button>
            <span class="text-grid7 text-sm">1</span>
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-plus-circle-outline"></i>
              </span>
            </button>
          </div>
          <div class="flex-1 text-sm leading-none">
            Beef steak│500gr.
            <p class="text-xs text-grid7 mt-1">
              500 Gr.
            </p>
          </div>
          <div class="text-sm leading-none text-right">€20.00</div>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="mr-4 w-16 flex justify-between items-center">
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-minus-circle-outline"></i>
              </span>
            </button>
            <span class="text-grid7 text-sm">2</span>
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-plus-circle-outline"></i>
              </span>
            </button>
          </div>
          <div class="flex-1 text-sm leading-none">
            Pulled chicken│500gr.
            <p class="text-xs text-grid7 mt-1">
              1 Kg.
            </p>
          </div>
          <div class="text-sm leading-none text-right">€12.00</div>
        </div>
        <div class="flex justify-between items-start mb-4">
          <div class="mr-4 w-16 flex justify-between items-center">
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-minus-circle-outline"></i>
              </span>
            </button>
            <span class="text-grid7 text-sm">2</span>
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-plus-circle-outline"></i>
              </span>
            </button>
          </div>
          <div class="flex-1 text-sm leading-none">
            Beef jerkey Paprika Jalopenios│100gr.
            <p class="text-xs text-grid7 mt-1">
              Cut in slices <span class="text-grid2">change</span> <br>
              200 Gr.
            </p>
          </div>
          <div class="text-sm leading-none text-right">€5.80</div>
        </div>
      </div>
      <hr class="text-grid5">
      <div class="flex justify-between p-4 text-sm">
        <div>Subtotal</div>
        <div>€37.80</div>
      </div>
      <div class="h-8 bg-grid9"></div>
      <div class="p-4">
        <div class="flex justify-between pb-4 text-sm items-center">
          <div class="mr-4">
            <span class="text-grid7 text-lg">
              <i class="mdi mdi-map-marker-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <div class="w-44">
              Delivery in 3 hours
              <p class="text-xs text-grid7 mt-1">
                Rue de brabant 230, 1030 Schaerbeek Belgique
              </p>
            </div>
          </div>
          <div>
            <a
              class="text-grid2 cursor-pointer"
              @click="addToModalView('DeliveryDetails')">change</a>
          </div>
        </div>
        <hr class="text-grid5">
        <div class="flex justify-between text-sm py-4">
          <div>Total</div>
          <div>€42.80</div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <router-link
        :to="{ name: 'Checkout' }"
        class="block w-full text-center border-2 border-grid11 py-2 rounded text-grid12 font-semibold text-sm">
        Go to checkout
      </router-link>
      <button
        v-if="isMobile"
        class="w-full text-center border border-grid14 py-2 rounded text-grid12 font-semibold text-sm mt-2">
        Back
      </button>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    isMobile: Boolean
  },
  components: {
  },
  data () {
    return {
      showDeliveryDetails: false
    }
  },
  methods: {
    ...mapMutations({
      removeToModalView: 'REMOVE_TO_MODAL_VIEW',
      addToModalView: 'ADD_TO_MODAL_VIEW'
    }),
    actionShowDeliveryDetails () {
      this.showDeliveryDetails = true
    }
  }
}
</script>

<style>

</style>
