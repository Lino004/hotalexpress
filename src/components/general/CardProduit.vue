<template>
  <div class="shadow-box1" :class="customClass">
    <figure class="relative">
      <img class="w-full h-40 object-cover" :src="img" alt="">
      <div class="absolute bg-red-600 left-0 top-10 text-white text-xs p-1" v-if="label">
        {{label}}
      </div>
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-black flex justify-between text-white p-2">
        <div>
          {{title}}
        </div>
        <button class="bg-white text-black p-1 text-sm shadow-box2">
          {{labelBtn}}
        </button>
      </div>
    </figure>
    <div class="text-gray-500 p-2 text-xs">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    title: String,
    description: String,
    labelBtn: String,
    img: String,
    customClass: String
  }
}
</script>

<style>

</style>
