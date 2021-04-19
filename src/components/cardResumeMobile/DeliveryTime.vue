<template>
  <div class="relative h-full flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <div class="flex p-4 justify-between">
        <h4 class="font-semibold">
          Delivery time
        </h4>
        <button @click="$emit('close')">
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
    return {
      choice: 1
    }
  }
}
</script>

<style>

</style>
