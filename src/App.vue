<template>
  <div id="app">
    <router-view/>
    <app-menu/>
    <menu-singup-login/>
    <modal-view/>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import MenuComponent from './components/general/Menu'
import MenuSingupLogin from './components/general/MenuSingupLogin.vue'
import ModalView from '@/components/modalView'

const Menu = createNamespacedHelpers('menu')

export default {
  components: {
    AppMenu: MenuComponent,
    MenuSingupLogin,
    ModalView
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
