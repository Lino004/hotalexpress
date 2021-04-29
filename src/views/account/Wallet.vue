<template>
  <div>
    <h4 class="text-lg font-semibold mb-5 hidden md:block">Wallet</h4>
    <div class="p-4 shadow-box1 w-full rounded-xl mb-12">
      <span class="text-6xl">
        <i class="mdi mdi-wallet"></i>
      </span>
      <span class="text-lg font-semibold">
        0.00 €
      </span>
      <div class="text-sm mb-10">
        Upgrading your wallet is currently unavailable
      </div>
    </div>
    <div class="mb-10">
      <div class="flex justify-between items-center  mb-3.5">
        <h3 class="text-lg font-semibold">Payment methods</h3>
        <button
          class="text-sm font-medium bg-grid5 focus:outline-none rounded-xl px-2 py-1">
          Edit
        </button>
      </div>
      <div>
        <div>
          <div class="flex items-center border-t border-b border-grid5 py-4">
            <span class="text-sm">Credit card | **** 6472</span>
            <img
              v-for="(img, y) in creditCard.imgs"
              :key="`${y}img`"
              :src="img"
              class="h-8">
          </div>
        </div>
        <div>
          <div class="flex items-center border-t border-b border-grid5 py-4">
            <span class="text-sm">Paypal | kamal@elbazi.com</span>
            <img
              v-for="(img, y) in paypal.imgs"
              :key="`${y}img`"
              :src="img"
              class="h-8">
          </div>
        </div>
        <div class="mt-4">
          <a class="text-sm font-medium cursor-pointer">+ Add a payment method</a>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <div class="flex justify-between items-center  mb-3.5">
        <h3 class="text-lg font-semibold">Voucher</h3>
      </div>
      <div>
        <div class="mt-4" v-if="!showAddVoucher">
          <a
            class="text-sm font-medium cursor-pointer"
            @click="showAddVoucher = true">
            + Add credit to wallet by voucher
          </a>
        </div>
        <div class="mt-4" v-else>
          <input
            type="text"
            class="form-input px-4 py-2 block w-full focus:outline-none rounded border border-grid14 mb-2"
            placeholder="Ex.: HE-V21-BS9wK3js8Ks9">
          <button
            @click="showAddVoucher = false"
            class="text-center border border-grid14 py-3 rounded text-grid12 font-semibold text-sm px-10">
            Validate voucher
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paypal from '@/assets/images/icons/paypal.svg'
import visa from '@/assets/images/icons/visa.svg'
import mastercard from '@/assets/images/icons/mastercard.svg'

export default {
  data () {
    return {
      paypal: {
        imgs: [paypal]
      },
      creditCard: {
        imgs: [mastercard, visa]
      },
      showAddVoucher: false
    }
  }
}
</script>

<style>

</style>
