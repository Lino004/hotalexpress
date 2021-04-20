<template>
  <div
    class="relative w-full">
    <div
      class="p-2 rounded shadow-box1 flex items-center"
      :class="{
        'rounded-b-none': show
      }">
      <span class="mr-1 text-gray-400">
        <i class="mdi mdi-send"></i>
      </span>
      <input
        class="flex-1 border border-transparent focus:outline-none focus:border-transparent"
        placeholder="Adresse, ville ou code postal"
        v-model="input">
      <button class="flex-initial bg-gradient-to-r from-grid2 to-grid1 py-2 px-4 rounded text-white hidden md:block">
        Search
      </button>
    </div>
    <div
      class="absolute w-full bg-white rounded rounded-t-none shadow-box1 overflow-y-auto"
      :class="{
        'h-32 md:h-44': data.length > 2
      }"
      v-if="show">
      <div
        v-for="(item, i) in data"
        :key="i">
        <div
          class="p-4 flex justify-between items-center min-w-168 cursor-pointer"
          @click="actionSelect(i)">
          <span class="mr-1 text-gray-400 text-lg">
            <i class="mdi mdi-map-marker"></i>
          </span>
          <div class="flex-1">
            <p class="font-medium">{{item.label}}</p>
            <p class="text-sm">{{item.subLabel}}</p>
          </div>
        </div>
        <hr class="text-grid5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: 'label'
    }
  },
  data () {
    return {
      input: '',
      show: false
    }
  },
  watch: {
    input (val) {
      this.show = !!val
    }
  },
  mounted () {
    const that = this
    document.addEventListener('click', function (event) {
      if (that.$el && !that.$el.contains(event.target)) {
        that.show = false
      }
    })
  }
}
</script>

<style>

</style>
