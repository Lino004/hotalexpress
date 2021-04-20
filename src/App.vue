<template>
  <div id="app">
    <router-view/>
    <app-menu/>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import MenuComponent from './components/general/Menu'

const Menu = createNamespacedHelpers('menu')

export default {
  components: {
    AppMenu: MenuComponent
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
