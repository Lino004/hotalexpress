<template>
  <div class="text-center py-2 md:px-4 rounded shadow-md md:shadow-box1 w-24 md:w-32">
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
