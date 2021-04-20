<template>
  <div
    class="relative rounded shadow-box1 hidden lg:block bg-white"
    :class="{
      'rounded-b-none': show
    }">
    <div
      class="p-4 flex justify-between items-center min-w-168 cursor-pointer"
      @click="show = !show">
      <span class="mr-1 text-gray-400">
        <i class="mdi" :class="`mdi-${data[value].icon}`"></i>
      </span>
      <span class="flex-1"> {{data[value].label}} </span>
      <span class="mr-1 text-gray-400">
        <i class="mdi mdi-menu-down"></i>
      </span>
    </div>
    <div
      class="absolute w-full bg-white rounded rounded-t-none shadow-box1 overflow-y-auto"
      :class="{
        'h-32': data.length > 2
      }"
      v-if="show">
      <div
        v-for="(item, i) in data"
        :key="i">
        <div
          class="p-4 flex justify-between items-center min-w-168 cursor-pointer"
          @click="actionSelect(i)">
          <span class="mr-1 text-gray-400">
            <i class="mdi" :class="`mdi-${item.icon}`"></i>
          </span>
          <span class="flex-1"> {{item.label}} </span>
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
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    actionSelect (index) {
      this.$emit('input', index)
      this.show = false
    },
    controlClickMouse (e) {
      console.log(e.target)
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
