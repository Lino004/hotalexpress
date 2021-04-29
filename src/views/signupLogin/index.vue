<template>
  <div class="relative h-full">
    <NavBar/>
    <hr class="text-grid5">
    <!-- <div class="h-24 md:h-44"></div> -->
    <section class="container mx-auto w-full lg:w-2/5 p-4">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {}
}
</script>

<style>

</style>
