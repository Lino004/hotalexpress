<template>
  <div
    class="md:hidden bottom-0 w-full bg-white"
    :class="{
      fixed: fixed
    }">
    <div class="flex items-center justify-between px-5 py-2 text-xs font-medium">
      <div class="flex-1">
        €0,00 · 0 Articles
      </div>
      <div class="text-base">
        <span>
          <i class="mdi mdi-chevron-up"></i>
        </span>
      </div>
      <div class="flex-1 text-right">
        Delivery
      </div>
    </div>
    <hr class="text-grid5">
    <div class="flex justify-between px-5 py-2 text-10px text-grid7">
      <div>0 Articles</div>
      <div class="flex-none w-1/3 text-right">
        Rue de Brabant 230 As soon as possible
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
