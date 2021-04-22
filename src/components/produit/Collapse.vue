<template>
  <section>
    <section class="border-b border-grid5 px-4">
      <div
        class="container mx-auto w-full md:w-9/12 flex space-x-2 items-center py-2 pl-2 cursor-pointer"
        @click="data.show = !data.show">
        <div class="text-sm font-medium"> {{data.title}} </div>
        <span>
          <i :class="`mdi mdi-chevron-${data.show ? 'down' : 'down'}`"></i>
        </span>
      </div>
    </section>
    <section class="bg-grid9 px-4" v-if="data.show">
      <div class="container mx-auto w-full md:w-9/12 py-4 grid md:grid-cols-3">
        <div class="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <card-sub-produit/>
          <card-sub-produit/>
          <card-sub-produit no-img/>
          <card-sub-produit
            border-left
            :data="{
              number: 1
            }"/>
          <card-sub-produit
            border-left
            :data="{
              number: 5
            }"/>
          <card-sub-produit no-img/>
          <card-sub-produit/>
        </div>
        <div class="hidden md:block"></div>
      </div>
    </section>
  </section>
</template>

<script>
import CardSubProduit from './CardSubProduit'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CardSubProduit
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
