<template>
  <div>
    <div
      v-for="item in length"
      :key="item"
      class="w-10 border-t-2 inline-block cursor-pointer"
      :class="{
        'border-red-600': value === item,
        'border-gray-200': value !== item
      }"
      @click="$emit('input', item)"></div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    value: Number
  },
  data () {
    return {
      idInterval: null
    }
  },
  methods: {
    change () {
      let nextIndex = this.value + 1
      if (nextIndex > this.length) nextIndex = 1
      this.$emit('input', nextIndex)
    }
  },
  mounted () {
    this.idInterval = setInterval(this.change, 3000)
  },
  destroyed () {
    clearInterval(this.idInterval)
  }
}
</script>

<style>

</style>
