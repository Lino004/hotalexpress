<template>
  <div
    :class="{
      'bg-gradient-to-r from-grid1 to-grid2 navbar': home
    }">
    <div
      class="container mx-auto w-full md:w-9/12 p-4"
      :class="{
        'h-20 md:h-32': home,
        'h-16': !home
      }">
      <div class="flex justify-between content-center">
        <div class="">
          <img src="@/assets/images/logo-white.svg" alt="" v-if="home">
          <img src="@/assets/images/logo.svg" alt="" v-else>
        </div>
        <div class="flex items-center">
          <div class="text-sm text-right mr-4 font-medium hidden md:flex" v-if="!home && !isPageSinginOrLogin">
            Delivery│Now <br>
            ▼ Rue de Brabant 230
          </div>
          <button
            class="border rounded mr-4 py-1 px-2 hidden md:flex items-center"
            :class="{
              'border-white text-white': home,
              'border-grid5': !home
            }"
            @click="setActiveMenuSingupLogin(true)">
            <span class="mr-1" :class="{ 'text-grid2': !home }">
              <i class="mdi mdi-home-outline"></i>
            </span>
            Sign up or log in
          </button>
          <router-link
            v-if="!home && !isPageSinginOrLogin"
            class="border rounded mr-4 py-1 px-2 hidden md:flex items-center"
            :class="{
              'border-white text-white': home,
              'border-grid5': !home
            }"
            tag="button"
            :to="{ name: 'Produit' }">
            <span class="mr-1" :class="{ 'text-grid2': !home }">
              <i class="mdi mdi-cart"></i>
            </span>
            €37,80
          </router-link>
          <button
            class="border rounded py-1 px-2 hidden md:flex items-center"
            :class="{
              'border-white text-white': home,
              'border-grid5': !home
            }"
            @click="setActive(true)">
            <span class="mr-1" :class="{ 'text-grid2': !home }">
              <i class="mdi mdi-menu"></i>
            </span>
            Menu
          </button>
          <button
            class="md:hidden items-center"
            :class="{
              'text-white': home,
              'border border-grid5 py-1 px-2': !home
            }"
            @click="setActive(true)">
            <span :class="{
              'text-grid2': !home,
              'text-3xl': home
              }">
              <i class="mdi mdi-menu"></i>
            </span>
              {{ home ? '' : 'Menu' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const Menu = createNamespacedHelpers('menu')

export default {
  props: {
    home: Boolean
  },
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    isPageSinginOrLogin () {
      return this.$route.name === 'SinginLogin'
    }
  },
  methods: {
    ...Menu.mapMutations({
      setActive: 'SET_ACTIVE',
      setActiveMenuSingupLogin: 'SET_ACTIVE_MENU_SINGUP_LOGIN'
    })
  }
}
</script>

<style>
.h-71 {
  height: 71px;
}
</style>
