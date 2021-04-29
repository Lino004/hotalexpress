<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-10/12 md:w-2/4 flex flex-col md:flex-row">
      <div class="bg-white flex-1" v-if="data.img">
        <img
          :src="data.img"
          class="w-full h-full object-cover">
      </div>
      <div class="bg-white flex-1 p-6">
        <div class="flex justify-between">
          <span class="font-semibold"> {{data.label}} </span>
          <a class="text-grid2 text-lg cursor-pointer" @click="$emit('close')">
            <i class="mdi mdi-close"></i>
          </a>
        </div>
        <hr class="text-grid5 border mb-3">
        <div class="flex space-x-2">
          <span class="font-semibold"> {{data.price}} </span>
          <div class="mr-4 w-16 flex justify-between items-center">
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-minus-circle-outline"></i>
              </span>
            </button>
            <span class="text-grid7 text-sm"> {{data.qte ? data.qte : 1}} </span>
            <button>
              <span class="text-grid2">
                <i class="mdi mdi-plus-circle-outline"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="font-medium text-xs mt-3" v-for="(choose, i) in data.chooses" :key="i">
          <label class=""> {{choose.label}} </label>
          <div class="space-x-2 mt-1">
            <button
              class="rounded-xl border-black p-1 focus:outline-none"
              v-for="(item, y) in choose.items" :key="`item${y}`"
              @click="actionChoose(i, y)"
              :class="{
                'border': !item.select,
                'border-2': item.select
              }">
              {{item.label}} {{item.select}}
            </button>
          </div>
        </div>
        <button class="bg-grid1 text-white text-sm p-2 mt-8" @click="$emit('close')">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    actionChoose (i, y) {
      this.data.chooses[i].items.forEach((element, index) => {
        element.select = index === y
      })
    }
  }
}
</script>

<style>

</style>
