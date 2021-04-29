<template>
  <transition :leave-active-class="`animated ${$device.mobile ? 'fadeOutDown' : 'fadeOutRightBig'}`">
    <div
      class="absolute top-0 w-full h-full bg-white flex flex-col"
      :class="{
        'animated fadeInRightBig': !$device.mobile,
        'animated fadeInUp': $device.mobile
      }">
      <div class="flex-1 overflow-y-auto">
        <div class="hidden md:flex p-4 justify-between bg-white">
          <img src="@/assets/images/logo.svg" alt="">
          <button  @click="removeToModalView('DeliveryDetails')">
            <span class="text-xl text-grid2">
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <hr class="text-grid5">
        <div class="flex p-4 justify-between">
          <h4 class="font-semibold">
            Delivery details
          </h4>
          <button class="md:hidden" @click="removeToModalView('DeliveryDetails')">
            <span>
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <hr class="text-grid5">
        <div class="">
          <div class="py-2 px-4">
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-colors" :value="1" v-model="choice">
              <span class="ml-2 text-sm">Delivery</span>
            </label>
          </div>
          <hr class="text-grid5">
          <div class="py-2 px-4">
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-colors" :value="2" v-model="choice">
              <span class="ml-2 text-sm">Click’n collect</span>
            </label>
          </div>
        </div>
        <div class="h-8 bg-grid9"></div>
        <div class="p-4">
          <div class="flex justify-between py-2 items-center">
            <div class="mr-2">
              <span class="text-grid7 text-lg">
                <i class="mdi mdi-map-marker-outline"></i>
              </span>
            </div>
            <div class="flex-1">
              <div class="text-sm">
                Rue de Brabant 230, Schaerbeek Belgie
              </div>
            </div>
            <div>
              <a
                class="text-grid2 text-xs font-medium cursor-pointer"
                @click="addToModalView('DeliveryAddress')">
                Change
              </a>
            </div>
          </div>
          <hr class="text-grid5">
          <div class="flex justify-between py-2 items-center">
            <div class="mr-2">
              <span class="text-grid7 text-lg">
                <i class="mdi mdi-clock-outline"></i>
              </span>
            </div>
            <div class="flex-1">
              <div class="text-sm">
                Delivery in 3 hours
              </div>
            </div>
            <div>
              <a
                class="text-grid2 text-xs font-medium cursor-pointer"
                @click="addToModalView('DeliveryTime')">
                Change
              </a>
            </div>
          </div>
          <div class="py-2">
            <a class="text-grid2 text-xs font-medium">Add delivery note</a>
          </div>
          <hr class="text-grid5">
          <div class="flex justify-between text-sm py-4">
            <div>Delivery cost</div>
            <div>€5.00</div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <button
          @click="removeToModalView('DeliveryDetails')"
          class="w-full text-center border border-grid14 py-2 rounded text-grid12 font-semibold text-sm mt-2">
          Update
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
      choice: 1,
      showDeliveryAddress: false,
      showDeliveryTime: false
    }
  },
  methods: {
    ...mapMutations({
      removeToModalView: 'REMOVE_TO_MODAL_VIEW',
      addToModalView: 'ADD_TO_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
