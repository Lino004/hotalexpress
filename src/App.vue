<template>
  <div id="app">
    <router-view/>
    <modal-view/>
    <cookies/>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import Cookies from './components/general/Cookies'
import ModalView from '@/components/modalView'

const Menu = createNamespacedHelpers('menu')

export default {
  components: {
    ModalView,
    Cookies
  },
  computed: {
    ...Menu.mapGetters({
      active: 'active'
    })
  }
}

</script>
<style>
</style>
