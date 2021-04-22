<template>
  <div class="relative h-full">
    <NavBar/>
    <hr class="text-grid5">
    <div class="h-24 md:h-44"></div>
    <section class="container mx-auto w-full lg:w-2/5 p-4">
      <h4 class="text-lg md:text-xl font-semibold md:text-center pb-4">Sign up or log in</h4>
      <button class="bg-facebook w-full rounded text-white flex items-center justify-center my-4 py-2">
        <span class="text-2xl">
          <i class="mdi mdi-facebook"></i>
        </span>
        <span class="text-sm md:text-base font-semibold">
          Continue with Facebook
        </span>
      </button>
      <button class="border border-grid5 w-full rounded flex items-center justify-center py-2">
        <img src="@/assets/images/icons/google-icon.svg" width="20" alt="">
        <span class="text-sm md:text-base ml-2 font-semibold">
          Continue with Google
        </span>
      </button>
      <div class="flex items-center my-4">
        <hr class="text-grid5 flex-1">
        <span class="text-sm md:text-base mx-4 text-grid7">or</span>
        <hr class="text-grid5 flex-1">
      </div>
      <button class="border border-grid5 text-grid2 w-full rounded flex items-center justify-center py-2">
        <span class="text-2xl">
          <i class="mdi mdi-email-outline"></i>
        </span>
        <span class="text-sm md:text-base ml-2 font-semibold">
          Continue with Email
        </span>
      </button>
      <p class="text-xs text-grid7 mt-4">
        By continuing you agree to our
        <a class="text-grid2">T&Cs</a>
        and that you have read and understood our
        <a class="text-grid2">Privacy Policy</a>.
        We use your data to offer you a personalized experience and to better understand and improve our services. For more information
        <a class="text-grid2">see here</a>.
      </p>
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
