<template>
  <div>
    <h4 class="text-lg font-semibold mb-5 hidden md:block">Order history</h4>
    <card-order
      v-for="(order, i) in dataOrder"
      :key="i"
      :data="order"/>
  </div>
</template>

<script>
import * as configOrder from '@/configuration/order'
import CardOrder from '../../components/account/order/CardOrder.vue'

export default {
  components: { CardOrder },
  data () {
    return {
      dataOrder: [
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order needs to be accepted by the vendor.',
          type: configOrder.TYPE_INCOMMING,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'The vendor did not yet accept the order. This could be due to crowd or other reasons. We are currently contacting the vendor to check your order.',
          type: configOrder.TYPE_NOT_ACCEPTED_YET,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order is being processed by the vendor.',
          type: configOrder.TYPE_IN_PROGRESS,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order is canceled.',
          type: configOrder.TYPE_CANCELED,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order is ready for pickup.',
          type: configOrder.TYPE_READY,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order needs to be accepted by the vendor.',
          type: configOrder.TYPE_INCOMMING,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Your order is accepted and being processed by the vendor.',
          type: configOrder.TYPE_IN_PROGRESS,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        },
        {
          lableStore: 'HalalBoucherie.be',
          chooseDelivery: 'As soon as possible',
          orderId: '2738',
          date: '29/04/2021 18:29',
          description: 'Order completed.',
          type: configOrder.TYPE_COMPLETED,
          details: [
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            },
            {
              qte: 2,
              title: 'Saucisses Fumées au Bois',
              price: 16.54
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
