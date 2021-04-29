<template>
  <div
    class="w-full bg-white shadow-box3 h-32 flex p-1 border-l-4 cursor-pointer relative"
    :class="{
      'border-grid11': data.qte,
      'border-white': !data.qte,
      'hover:border-grid11': !data.outOfStock,
    }"
    @click="actionClick">
    <div
      class="flex-1 p-2 flex flex-col justify-between"
      :class="{
        'opacity-40': data.outOfStock
      }">
      <div class="flex-1">
        <h4 class="text-sm font-medium">
          <span
            v-if="data.qte"
            :class="{
              'text-grid12 text-10px': data.qte
            }"> {{data.qte}} x</span>
          {{data.label}}
        </h4>
        <p class="text-grid10 font-medium text-xs pr-4 line-clamp-3">
          {{data.description}}
        </p>
      </div>
      <div class="text-sm font-medium">
        {{data.price}}
        <span class="text-grid10 font-medium text-xs">
          {{data.qtePerPrice}}
        </span>
        <span v-if="data.option" class="text-xs">
          (variable product)
        </span>
      </div>
    </div>
    <div
      class="h-full relative"
      :class="{
        'bg-grid13 w-32': data.img
      }"
      v-if="data.img">
      <img
        :src="data.img"
        v-if="data.img"
        class="w-full h-full object-cover"
        :class="{
          'opacity-40': data.outOfStock
        }">
      <div class="absolute w-full text-center bg-white absolute-center text-sm font-semibold py-1" v-if="data.outOfStock">
        OUT OF STOCK
      </div>
    </div>
    <button
      v-if="!data.option"
      class="absolute bottom-2 right-2 px-1 rounded-md bg-grid13 bg-opacity-50"
      :class="{
        'opacity-40 cursor-not-allowed': data.outOfStock
      }">
      <span class="text-xl text-grid2">
        <i class="mdi mdi-plus"></i>
      </span>
    </button>
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
  data () {
    return {}
  },
  methods: {
    actionClick () {
      if (this.data.option) {
        this.$emit('is-click')
      }
    }
  }
}
</script>

<style>

</style>
