<template>
  <div>
    <NavBar/>
    <hr class="text-grid5 w-5/6">
    <section class="container mx-auto w-full md:w-9/12 px-4 pb-20 md:pb-0">
      <h4 class="text-22px font-semibold py-4 hidden md:block">Account</h4>
      <h4 class="text-22px font-semibold py-4 block md:hidden">
        Account /
        <a class="text-grid2">
          {{menu.find(el => el.to === $route.name).label}}
        </a>
      </h4>
      <hr class="text-grid5 mb-4">
      <div class="flex">
        <div class="w-3/12 space-y-2 hidden md:block">
          <router-link
            v-for="(item, i) in menu"
            :key="i"
            :to="{ name: item.to }"
            tag="div"
            class="py-2 px-6 font-medium cursor-pointer"
            :class="{
              'bg-error': $route.name === item.to
            }">
            {{item.label}}
          </router-link>
        </div>
        <div class="md:pt-2 md:p-6 flex-1">
          <router-view/>
        </div>
      </div>
    </section>
    <!-- <Footer show-footer-action-mobile/> -->
    <FooterActionMobile/>
  </div>
</template>

<script>
import NavBar from '@/components/general/NavBar.vue'
// import Footer from '@/components/general/Footer.vue'
import FooterActionMobile from '@/components/general/FooterActionMobile.vue'

export default {
  components: {
    NavBar,
    // Footer,
    FooterActionMobile
  },
  data () {
    return {
      menu: [
        {
          label: 'Profile',
          to: 'Profile'
        },
        {
          label: 'Addresses',
          to: 'Addresses'
        },
        {
          label: 'Wallet',
          to: 'Wallet'
        },
        {
          label: 'Order history',
          to: 'Order'
        }
      ]
    }
  }
}
</script>

<style>

</style>
