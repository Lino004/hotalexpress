<template>
  <transition leave-active-class="animated fadeOutRightBig">
    <div class="animated fadeInRightBig flex-none w-full h-full md:w-96 bg-white relative">
      <div class="flex-1 overflow-y-auto bg-grid9">
        <div class="flex p-4 justify-between bg-white">
          <img src="@/assets/images/logo.svg" alt="">
          <button @click="removeToModalView('MenuSingupLogin')">
            <span class="text-xl text-grid2">
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <hr class="text-grid5">
        <div class="h-8"></div>
        <div class="px-4">
          <button
            @click="goTo('SignupLogin')"
            class="block w-full text-center border border-grid14 py-2 rounded text-grid12 bg-white font-semibold text-sm">
            Sign up or log in
          </button>
        </div>
        <div class="h-8"></div>
        <hr class="text-grid5">
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-store"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>Add your store</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2">
          <div class="mr-2">
            <span class="text-2xl text-grid7">
              <i class="mdi mdi-help-circle-outline"></i>
            </span>
          </div>
          <div class="flex-1">
            <p>FAQ</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="flex md:hidden justify-between items-center border-b bg-white cursor-pointer border-grid5 px-4 py-2"
          @click="addToModalView('CountryLanguage')">
          <div class="mr-2 ml-1">
            <img width="20" src="@/assets/images/icons/english-language.svg" alt="">
          </div>
          <div class="flex-1">
            <p>English - Belgium</p>
          </div>
          <div>
            <span class="text-2xl text-grid2">
              <i class="mdi mdi-chevron-right"></i>
            </span>
          </div>
        </div>
        <div class="p-4 bg-white border-b border-grid5 hidden md:block">
          <select class="form-select text-sm rounded border border-grid14 w-full mb-2">
            <option>English</option>
          </select>
          <select class="form-select text-sm rounded border border-grid14 w-full">
            <option>Belgium</option>
          </select>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      showContryLanguage: false
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations({
      removeToModalView: 'REMOVE_TO_MODAL_VIEW',
      addToModalView: 'ADD_TO_MODAL_VIEW'
    }),
    goTo (nameRoute) {
      this.removeToModalView('MenuSingupLogin')
      if (this.$route.name !== nameRoute) this.$router.push({ name: nameRoute })
    }
  }
}
</script>

<style>

</style>
