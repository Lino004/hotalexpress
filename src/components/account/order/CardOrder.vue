<template>
  <div class="w-full shadow-box2 rounded px-4 py-2 mb-3 flex">
    <div class="mr-2">
      <div
        class="text-white text-2xl rounded px-2 py-1"
        :class="{
          'bg-grid16': isActif,
          'bg-black': !isActif,
        }">
        <span>
          <i class="mdi mdi-shopping"></i>
        </span>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex mb-2">
        <div class="flex-1">
          <p class="text-sm">
            <span class="font-medium"> {{data.lableStore}} </span> -
            Delivery - {{data.chooseDelivery}}
          </p>
          <p class="text-xs text-grid7">
            Order ID #{{data.orderId}} - {{data.date}}
          </p>
        </div>
        <div>
          <div
            class="text-xs md:text-sm rounded-lg px-2"
            :class="{
              'text-grid16 bg-green-50': isActif,
              'bg-gray-100': !isActif,
            }">
            {{data.type}}
          </div>
        </div>
      </div>
      <div>
        <p class="text-sm font-medium">
          {{data.description}}
        </p>
      </div>
      <hr class="text-grid5 mt-3">
      <div>
        <transition
          enter-active-class="animated fadeIn">
          <div v-if="showDetails">
            <div
              class="flex items-center text-sm font-medium py-2 border-b border-grid14"
              v-for="(item, i) in data.details"
              :key="i">
              <div class="mr-2">
                <div class="bg-grid17 text-xs py-1 px-2 rounded font-medium"> {{item.qte}} </div>
              </div>
              <div class="flex-1">
                {{item.title}}
              </div>
              <div>
                {{formatNumber(item.price)}}
              </div>
            </div>
            <div class="text-right text-lg font-semibold">
              {{formatNumber(total)}}
            </div>
          </div>
        </transition>
        <div class="mt-3">
          <a
            class="text-grid7 text-xs cursor-pointer"
            @click="showDetails = !showDetails">
            {{showDetails ? 'Close order details' : 'See order details'}}
            <span>
              <i :class="`mdi mdi-chevron-${showDetails ? 'up' : 'down'}`"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TYPE_CANCELED, TYPE_COMPLETED } from '@/configuration/order'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showDetails: false
    }
  },
  computed: {
    total () {
      if (!this.data.details.length) return 0
      return this.data.details.map(el => el.price).reduce((acc, val) => acc + val)
    },
    isActif () {
      return ![TYPE_CANCELED, TYPE_COMPLETED].includes(this.data.type)
    }
  }
}
</script>

<style>

</style>
