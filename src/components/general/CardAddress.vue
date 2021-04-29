<template>
  <div>
    <div class="relative">
      <div class="flex justify-between items-center  mb-3.5">
        <h3 class="text-xl font-semibold">Delivery address</h3>
        <button class="text-sm font-medium bg-grid5 rounded-xl px-2 py-1" @click="addToModalView('DeliveryAddress')">
          Edit
        </button>
      </div>
      <div class="w-full h-36 rounded bg-white p-5 shadow-box2 text-sm">
        <div class="flex justify-between items-center">
          <div class="flex space-x-2 w-3/5">
            <span class="text-lg text-black">
              <i class="mdi mdi-map-marker"></i>
            </span>
            <p class="text-grid10">
              Rue de brabant 230 1030, Schaerbeek Belgique
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/map.svg"
        class="absolute bottom-0 right-0">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      addToModalView: 'ADD_TO_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
