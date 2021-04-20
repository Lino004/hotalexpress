<template>
  <div class="shadow-box1" :class="customClass">
    <figure class="relative">
      <img class="w-full h-40 object-cover" :src="img" alt="">
      <div class="absolute bg-red-600 left-0 top-10 text-white text-10px md:text-xs p-1 font-semibold" v-if="label">
        {{label}}
      </div>
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-black flex items-center justify-between text-white p-2 font-semibold">
        <div class="text-10px md:text-sm w-4/6 truncate">
          {{title}}
        </div>
        <div class="bg-white bg-opacity-80 text-black py-1 px-2 shadow-box2 text-10px md:text-xs font-semibold">
          {{labelBtn}}
        </div>
      </div>
    </figure>
    <div class="text-grid7 p-2 text-10px md:text-xs">
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
