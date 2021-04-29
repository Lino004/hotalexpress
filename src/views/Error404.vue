<template>
  <div class="flex justify-center h-full">
    <div class="self-center text-center">
      <div class="text-9xl font-medium">
        404
      </div>
      <h4 class="text-xl font-semibold">Look like you're lost</h4>
      <h5>the page you are looking for not avaible!</h5>
      <router-link
        tag="button"
        :to="{ name: 'Home' }"
        class="bg-gradient-to-r from-grid2 to-grid1 py-2 px-4 rounded mt-4 font-semibold text-white">
        Go to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
