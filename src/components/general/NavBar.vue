<template>
  <div id="navbar" class="bg-gradient-to-r from-grid1 to-grid2">
    <div class="h-32 container mx-auto w-full md:w-9/12 p-4">
      <div class="flex justify-between content-center">
        <div class="">
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="flex items-center">
          <button class="border border-white rounded mr-2 py-1 px-2 text-white hidden md:flex items-center">
            <span class="mr-1">
              <i class="mdi mdi-home-outline"></i>
            </span>
            Sign up or log in
          </button>
          <button class="border border-white rounded py-1 px-2 text-white hidden md:flex items-center">
            <span class="mr-1">
              <i class="mdi mdi-menu"></i>
            </span>
            Menu
          </button>
          <button class="text-white text-2xl md:hidden items-center">
            <span class="">
              <i class="mdi mdi-menu"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
