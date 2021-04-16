<template>
  <div class="text-center py-2 px-4 rounded shadow-box1 w-28">
    <img class="mx-auto h-8" :src="img">
    <h4 class="text-sm"> {{label}} </h4>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    img: String
  }
}
</script>

<style>

</style>
