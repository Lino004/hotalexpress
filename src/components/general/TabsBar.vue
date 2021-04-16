<template>
  <div>
    <div
      v-for="item in length"
      :key="item"
      class="w-10 border-t inline-block cursor-pointer"
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
  }
}
</script>

<style>

</style>
