<template>
  <div class="relative h-full flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <div class="hidden md:flex p-4 justify-between bg-white">
        <img src="@/assets/images/logo.svg" alt="">
        <button @click="$emit('close')">
          <span class="text-xl text-grid2">
            <i class="mdi mdi-close"></i>
          </span>
        </button>
      </div>
      <hr class="text-grid5">
      <div class="flex p-4 justify-between">
        <h4 class="font-semibold">
          Delivery address
        </h4>
        <button class="md:hidden" @click="$emit('close')">
          <span>
            <i class="mdi mdi-close"></i>
          </span>
        </button>
      </div>
      <hr class="text-grid5">
      <div class="p-4">
        <label class="text-sm">
          Enter your address
        </label>
        <div class="flex my-2">
          <input
            type="email"
            class="form-input w-full text-sm rounded rounded-r-none border border-r-0 border-grid14 flex-1"
            placeholder="Enter your full address">
          <button class="rounded rounded-l-none border border-l-0 border-grid14 px-2">
            <span class="text-grid12">
              <i class="mdi mdi-send"></i>
            </span>
          </button>
        </div>
        <div class="pt-2">
          <p class="text-xs">
            <a class="text-grid2">Log in</a> for your recent addresses.
          </p>
        </div>
      </div>
      <hr class="text-grid5">
      <div class="p-4 grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <custom-input
            placeholder="Street"
            success
            custom-class="text-sm"/>
        </div>
        <div>
          <custom-input
            placeholder="Housenr."
            error
            custom-class="text-sm"/>
        </div>
        <div class="col-span-3">
          <custom-input
            placeholder="Housenr."
            success
            custom-class="text-sm"/>
        </div>
        <div class="col-span-3">
          <custom-input
            placeholder="City."
            success
            custom-class="text-sm"/>
        </div>
      </div>
      <hr class="text-grid5">
      <div class="p-4">
        <label class="text-sm">
          Add note(optional)
        </label>
        <div class="flex my-2">
          <textarea
            type="email"
            class="form-textarea w-full text-sm rounded rounded-r-none border border-grid14 flex-1"
            placeholder="Ie.: Please don’t ring the bell. Baby is sleeping."/>
        </div>
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox">
          <span class="ml-2 text-sm">Save these remarks for your next order.</span>
        </label>
      </div>
    </div>
    <div class="p-4">
      <button
        v-if="isMobile"
        @click="$emit('update')"
        class="w-full text-center border border-grid14 py-2 rounded text-grid12 font-semibold text-sm mt-2">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import CustomInput from '../custom-form/CustomInput.vue'

export default {
  props: {
    isMobile: Boolean,
    asMenu: Boolean
  },
  components: {
    CustomInput
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
