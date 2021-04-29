<template>
  <div v-if="!cookies" class="fixed bottom-0 w-full bg-grid3 text-white py-5 md:py-10">
    <div class="mx-auto px-5 md:w-1/2 grid md:grid-cols-3">
      <div class="md:col-span-2 text-xs mb-3 md:mb-0">
        Nous utilisons les cookies et autres technologies pour améliorer et personnaliser
        votre expérience d’utilisation, ainsi que des publicités en partenariat
        avec des tiers. Gérer vos préférences
      </div>
      <div class="md:px-5 w-full flex items-center">
        <button
          @click="setCookies(true)"
          class="w-full bg-gradient-to-r from-grid2 to-grid1 py-2 text-sm font-semibold">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cookies: 'cookies'
    })
  },
  methods: {
    ...mapMutations({
      setCookies: 'SET_COOKIES'
    })
  }
}
</script>

<style>

</style>
