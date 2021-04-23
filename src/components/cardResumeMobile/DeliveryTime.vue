<template>
  <div class="absolute top-0 w-full h-full bg-white flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <div class="hidden md:flex p-4 justify-between bg-white">
        <img src="@/assets/images/logo.svg" alt="">
        <button  @click="removeToModalView('DeliveryTime')">
          <span class="text-xl text-grid2">
            <i class="mdi mdi-close"></i>
          </span>
        </button>
      </div>
      <div class="flex p-4 justify-between">
        <h4 class="font-semibold">
          Delivery time
        </h4>
        <button class="md:hidden" @click="removeToModalView('DeliveryTime')">
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
            <span class="ml-2 text-sm">As soon as possible</span>
          </label>
        </div>
        <hr class="text-grid5">
        <div class="py-2 px-4">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-colors" :value="2" v-model="choice">
            <span class="ml-2 text-sm">Later</span>
          </label>
        </div>
      </div>
      <div class="p-4" v-if="choice === 2">
        <select class="form-select text-sm rounded border border-grid14 w-full">
          <option>Today</option>
        </select>
        <select class="form-select text-sm rounded border border-grid14 w-full mt-2">
          <option>20:00 - 20:30</option>
        </select>
      </div>
    </div>
    <div class="p-4">
      <button
        @click="removeToModalView('DeliveryTime')"
        class="w-full text-center border border-grid14 py-2 rounded text-grid12 font-semibold text-sm mt-2">
        Update
      </button>
    </div>
  </div>
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
      choice: 1
    }
  },
  methods: {
    ...mapMutations({
      removeToModalView: 'REMOVE_TO_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
