<template>
  <div
    class="w-full bg-white shadow-box3 h-32 flex p-1 hover:border-l-2 hover:border-grid11 cursor-pointer">
    <div class="flex-1 p-2 flex flex-col justify-between">
      <div class="flex-1">
        <h4 class="text-sm font-medium">
          <span
            v-if="borderLeft"
            :class="{
              'text-grid12 text-10px': borderLeft
            }"> {{data.number}} x</span>
          Lamb ribs - 500gr
        </h4>
        <p class="text-grid10 font-medium text-xs pr-4 line-clamp-3">
          Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir
        </p>
      </div>
      <div class="text-sm font-medium">
        4,90 € <span class="text-grid10 font-medium text-xs"> /500gr.</span>
      </div>
    </div>
    <div
      class="w-32 h-full relative"
      :class="{
        'bg-grid13': !noImg
      }">
      <button
        class="absolute bottom-0 right-0 px-1"
        :class="{
          'bg-grid13 rounded-md': noImg
        }">
        <span class="text-grid12">
          <i class="mdi mdi-plus"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    noImg: {
      type: Boolean,
      default: false
    },
    borderLeft: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
