<template>
  <div class="fixed top-0 w-screen h-screen z-30 flex bg-grid15" v-if="active">
    <div class="flex-1" @click="setActive(!active)"></div>
    <div class="flex-none w-full md:w-96 bg-grid9 relative">
      <div class="flex-1 overflow-y-auto">
        <div class="flex p-4 justify-between bg-white">
          <img src="@/assets/images/logo.svg" alt="">
          <button @click="setActive(!active)">
            <span class="text-xl text-grid2">
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <hr class="text-grid5">
        <div class="h-8"></div>
        <hr class="text-grid5">
        <div class="flex justify-between items-center border-b bg-white border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-account-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Account</p>
            <p class="text-grid7 text-sm">kamal@elbazi.com</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-file-document-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Order history</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2"
          @click="showDeliveryAddress = true">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-map-marker-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Delivery address</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-wallet-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Wallet</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-logout"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Log out</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="h-8"></div>
        <hr class="text-grid5">
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-store"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Add your store</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-help-circle-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>FAQ</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="p-4 bg-white border-b border-grid5">
          <select class="form-select text-sm rounded border border-grid14 w-full mb-2">
            <option>English</option>
          </select>
          <select class="form-select text-sm rounded border border-grid14 w-full">
            <option>Belgium</option>
          </select>
        </div>
      </div>
      <div class="absolute w-full h-full bg-white top-0" v-if="showDeliveryAddress">
        <delivery-address
          @update="showDeliveryAddress = false"
          @close="showDeliveryAddress = false"
          is-mobile/>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DeliveryAddress from '../cardResumeMobile/DeliveryAddress.vue'

const Menu = createNamespacedHelpers('menu')

export default {
  components: {
    DeliveryAddress
  },
  data () {
    return {
      showDeliveryAddress: false
    }
  },
  computed: {
    ...Menu.mapGetters({
      active: 'active'
    })
  },
  methods: {
    ...Menu.mapMutations({
      setActive: 'SET_ACTIVE'
    })
  }
}
</script>

<style>

</style>
