<template>
  <div class="bg-grid3 text-xs pb-24 md:pb-0">
    <div class="container mx-auto w-full md:w-9/12 p-4 text-white">
      <div class="py-4 grid md:grid-cols-4 gap-4">
        <section>
          <h4 class="font-medium mb-2">
            About Halal Express
          </h4>
          <p class="mb-2">
            Halal Express, found on 2020, is a grocery ordering platform based on halal market in Belgium and France. Combining same day delivery and easy-to-order.
          </p>
          <div class="flex items-center">
            <button class="border border-white rounded mr-2 py-1 px-2 text-white flex items-center">
              IOS
              <span class="ml-1">
                <i class="mdi mdi-apple"></i>
              </span>
            </button>
            <button class="border border-white rounded py-1 px-2 text-white flex items-center">
              Android
              <span class="ml-1">
                <i class="mdi mdi-google-play"></i>
              </span>
            </button>
          </div>
        </section>
        <section>
          <h4 class="font-medium mb-2">
            My halal express
          </h4>
          <div>
            <a class="block">About us</a>
            <a class="block">My account</a>
            <a class="block">Download Halal Express</a>
            <a class="block">Compliments & complaints</a>
            <a class="block">FAQ</a>
            <a class="block">Contact</a>
          </div>
        </section>
        <section>
          <h4 class="font-medium mb-2">
            Enterprise
          </h4>
          <div>
            <a class="block">Partner</a>
            <a class="block">Store manager dashboard</a>
            <a class="block">Download store manager</a>
            <a class="block">Become a vendor</a>
            <a class="block">Enterprise store</a>
            <a class="block">FAQ Enterprise</a>
            <a class="block">Contact Enterprise</a>
          </div>
        </section>
        <section>
          <h4 class="font-medium mb-2">
            Enterprise
          </h4>
          <div class="flex space-x-2">
            <a class="bg-grid4 px-1 rounded">
              <span class="">
                <i class="mdi mdi-instagram"></i>
              </span>
            </a>
            <a class="bg-grid4 px-1 rounded">
              <span class="">
                <i class="mdi mdi-facebook"></i>
              </span>
            </a>
            <a class="bg-grid4 px-1 rounded">
              <span class="">
                <i class="mdi mdi-whatsapp"></i>
              </span>
            </a>
            <a class="bg-grid4 px-1 rounded">
              <span class="">
                <i class="mdi mdi-email-outline"></i>
              </span>
            </a>
          </div>
        </section>
      </div>
      <hr>
      <div class="py-4 flex justify-between items-center">
        <div>
          <div class="bg-white inline-block h-9 w-14 rounded mr-2"></div>
          <div class="bg-white inline-block h-9 w-14 rounded mr-2"></div>
          <div class="bg-white inline-block h-9 w-14 rounded mr-2"></div>
          <div class="bg-white inline-block h-9 w-14 rounded mr-2"></div>
        </div>
        <div>
          Termes et conditions | Politique de confidentialité | © HalalExpress
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    showFooterActionMobile: {
      type: Boolean,
      default: false
    }
  },
  components: {
  }
}
</script>

<style>

</style>
