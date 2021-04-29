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
          <card-sub-produit
            v-for="(produit, i) in produitsVariable"
            :key="i"
            :data="produit"
            @is-click="$emit('show-produit', produit)"/>
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
    return {
      produitsVariable: [
        {
          label: 'Lamb ribs - 500gr Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '',
          img: 'https://cdn.bioalaune.com/img/article/thumb/900x500/23324-un_sucre_present_dans_la_viande_rouge_favorise_le_developpement_du_cancer.jpg',
          option: false,
          chooses: []
        },
        {
          label: 'Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '',
          img: 'https://www.jogging-international.net/wp-content/uploads/2020/05/340e1c451d6e12e61064a06c76060f28.jpg',
          option: true,
          chooses: [
            {
              label: 'Choose your cut',
              items: [
                {
                  label: 'Cut in pieces',
                  select: false
                },
                {
                  label: 'Not cut',
                  select: false
                }
              ]
            },
            {
              label: 'Choose your style:',
              items: [
                {
                  label: 'Clean bone',
                  select: false
                },
                {
                  label: 'Do not clean',
                  select: false
                }
              ]
            }
          ]
        },
        {
          label: 'Lamb ribs - 500gr Lamb ribs - 500gr Lamb ribs - 500gr Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '',
          img: '',
          option: true,
          chooses: [
            {
              label: 'Choose your cut',
              items: [
                {
                  label: 'Cut in pieces',
                  select: false
                },
                {
                  label: 'Not cut',
                  select: false
                }
              ]
            }
          ]
        },
        {
          label: 'Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '1',
          img: 'https://www.sciencesetavenir.fr/assets/img/2018/01/12/cover-r4x3w1000-5da5e492599e4-043-belpress-00118164-007.jpg',
          option: false,
          chooses: []
        },
        {
          label: 'Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '3',
          img: 'https://www.la-viande.fr/sites/default/files/styles/facebook/public/article/images/consommation-viandes.jpg?itok=hW7qeNnz',
          option: false,
          chooses: []
        },
        {
          label: 'Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '',
          img: '',
          option: false,
          chooses: []
        },
        {
          label: 'Lamb ribs - 500gr',
          description: 'Spicy marinated lamb ribs, lorem epsum lorem ipsum lorem ipsum lorem ipsum senir',
          price: '4,90 €',
          qtePerPrice: '/500gr.',
          qte: '',
          img: 'https://www.agro-media.fr/wp-content/uploads/2019/04/VIANDE.jpg',
          option: false,
          outOfStock: true,
          chooses: []
        }
      ]
    }
  }
}
</script>

<style>

</style>
