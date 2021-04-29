<template>
  <div class="bg-grid3 text-xs pb-20 md:pb-0">
    <div class="container mx-auto w-full md:w-9/12 p-4 text-white">
      <div class="py-4 md:flex">
        <section class="md:text-center md:w-1/2 mx-auto">
          <h4 class="font-semibold mb-2">
            ABOUT HALAL EXPRESS
          </h4>
          <p class="mb-2">
            Halal Express, found on 2020, is a grocery ordering platform based on halal market in Belgium and France. Combining same day delivery and easy-to-order.
          </p>
        </section>
        <section class="md:w-1/2 mx-auto my-4 md:my-0 md:order-first">
          <h4 class="font-semibold mb-2">
            DOWNLOAD THE APP
          </h4>
          <div class="flex items-center">
            <button class="border border-white rounded mr-2 py-1 px-2 md:px-4 text-white flex items-center">
              IOS
              <span class="ml-1">
                <i class="mdi mdi-apple"></i>
              </span>
            </button>
            <button class="border border-white rounded py-1 px-2 md:px-4 text-white flex items-center">
              Android
              <span class="ml-1">
                <i class="mdi mdi-google-play"></i>
              </span>
            </button>
          </div>
        </section>
        <section class="md:text-right md:w-1/2 mx-auto">
          <h4 class="hidden md:inline-block font-semibold mb-2">
            HELP & LEGAL
          </h4>
          <div>
            <a>Contact</a> |
            <a>FAQ</a> |
            <a>Site map</a>
          </div>
          <div>
            <a>Termes et conditions</a> |
            <a>Privaty</a> |
            <a>Coockies</a>
          </div>
        </section>
      </div>
      <hr>
      <div class="py-4 flex justify-between items-center">
        <div>
          <img class="inline-block w-8 mr-1 md:w-12" src="@/assets/images/icons/bancontact.svg" alt="">
          <img class="inline-block w-8 mr-1 md:w-12" src="@/assets/images/icons/maestro.svg" alt="">
          <img class="inline-block w-8 mr-1 md:w-12" src="@/assets/images/icons/mastercard.svg" alt="">
          <img class="inline-block w-8 mr-1 md:w-12" src="@/assets/images/icons/paypal.svg" alt="">
          <img class="inline-block w-8 mr-1 md:w-12" src="@/assets/images/icons/visa.svg" alt="">
        </div>
        <div class="flex-auto text-right">
          2021 | © HalalExpress
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
