<template>
  <div class="relative h-full flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <div class="flex p-4 justify-between">
        <h4 class="font-semibold">
          Delivery address
        </h4>
        <button @click="$emit('close')">
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
        <div class="flex">
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

export default {
  props: {
    isMobile: Boolean
  },
  components: {
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
