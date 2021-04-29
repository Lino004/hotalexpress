<template>
  <transition leave-active-class="animated fadeOutRightBig">
    <div class="animated fadeInRightBig absolute top-0 w-full h-full bg-white flex flex-col">
      <div class="flex-1 overflow-y-auto">
        <div class="hidden md:flex p-4 justify-between bg-white">
          <img src="@/assets/images/logo.svg" alt="">
          <button  @click="removeToModalView('CountryLanguage')">
            <span class="text-xl text-grid2">
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <div class="flex p-4 justify-between">
          <h4 class="font-semibold">
            Country & language
          </h4>
          <button class="md:hidden" @click="removeToModalView('CountryLanguage')">
            <span>
              <i class="mdi mdi-close"></i>
            </span>
          </button>
        </div>
        <hr class="text-grid5">
        <div class="p-4 bg-white">
          <select class="form-select text-sm rounded border border-grid14 w-full mb-2">
            <option>English</option>
          </select>
          <select class="form-select text-sm rounded border border-grid14 w-full">
            <option>Belgium</option>
          </select>
        </div>
      </div>
      <div class="p-4">
        <button
          @click="removeToModalView('CountryLanguage')"
          class="w-full text-center border border-grid14 py-2 rounded text-grid12 font-semibold text-sm mt-2">
          Update
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations({
      removeToModalView: 'REMOVE_TO_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
