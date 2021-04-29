<template>
  <div>
    <NavBar/>
    <hr class="text-grid5">
    <section class="container mx-auto w-full md:w-9/12 px-4">
      <h4 class="text-22px font-semibold py-4">Checkout</h4>
      <hr class="text-grid5">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
        <div class="lg:col-span-2">
          <div class="grid lg:grid-cols-2 gap-4 mb-4">
            <div class="">
              <h3 class="text-xl font-semibold mb-3.5">Delivery details</h3>
              <div class="w-full h-36 rounded bg-white p-5 shadow-box2 text-sm">
                <div class="flex justify-between items-center space-x-4">
                  <div class="flex items-center space-x-2">
                    <span class="text-lg text-black">
                      <i class="mdi mdi-map-marker"></i>
                    </span>
                    <p class="text-grid10">
                      From
                      <span class="font-semibold underline">HalalBoucherie.be</span>
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-lg text-black">
                    <i class="mdi mdi-clock"></i>
                  </span>
                  <p class="text-grid10">
                    Arriving in 3 hours
                  </p>
                </div>
              </div>
            </div>
            <card-address/>
          </div>
          <div class="mb-10">
            <div class="flex justify-between items-center mb-3.5">
              <h3 class="text-xl font-semibold">When</h3>
            </div>
            <div class="">
              <div class="" v-for="(item, i) in itemsTime" :key="i">
                <label class="flex items-center">
                  <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-time" :value="i" v-model="choiceTime">
                  <span class="ml-2 text-sm"> {{item}} </span>
                </label>
                <hr class="text-grid5 my-4" v-if="i !== itemsTime.length - 1">
              </div>
              <div class="py-4" v-if="choiceTime === 1">
                <select class="form-select text-sm rounded border border-grid14 w-full">
                  <option>Today</option>
                </select>
                <select class="form-select text-sm rounded border border-grid14 w-full mt-2">
                  <option>20:00 - 20:30</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-10">
            <div class="flex justify-between items-center  mb-3.5">
              <h3 class="text-xl font-semibold">Payment</h3>
              <button
                class="text-sm font-medium bg-grid5 focus:outline-none rounded-xl px-2 py-1"
                @click="confirmChoice = !confirmChoice">
                {{confirmChoice ? 'Edit' : 'Confirm'}}
              </button>
            </div>
            <div v-if="!confirmChoice">
              <div class="" v-for="(item, i) in itemsPayment" :key="i">
                <label class="flex items-center">
                  <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-payment" :value="i" v-model="choicePayment">
                  <span class="ml-2 text-sm"> {{item.label}} </span>
                  <img
                    v-for="(img, y) in item.imgs"
                    :key="`${y}img`"
                    :src="img"
                    class="h-8">
                </label>
                <hr class="text-grid5 my-4">
              </div>
              <div class="">
                <label class="flex items-center">
                  <input type="radio" class="form-radio h-5 w-5 text-grid2" name="radio-payment" :value="itemsPayment.length" v-model="choicePayment">
                  <div
                    :class="{
                      'text-grid8': !wallet.value
                    }">
                    <span class="ml-2 text-sm"> Wallet </span> |
                    <span> € {{wallet.value}} </span>
                    <a class="text-grid2 cursor-pointer" v-if="!wallet.value">Upgrade your wallet</a>
                  </div>
                </label>
              </div>
            </div>
            <div v-else>
              <div v-if="choicePayment === 0">
                <div class="flex items-center border-t border-b border-grid5 py-4">
                  <span class="text-sm">Credit card | **** 6472</span>
                  <img
                    v-for="(img, y) in itemsPayment[choicePayment].imgs"
                    :key="`${y}img`"
                    :src="img"
                    class="h-8">
                </div>
              </div>
              <div v-if="choicePayment === 1">
                <div class="flex items-center border-t border-b border-grid5 py-4">
                  <span class="text-sm">Paypal | kamal@elbazi.com</span>
                  <img
                    v-for="(img, y) in itemsPayment[choicePayment].imgs"
                    :key="`${y}img`"
                    :src="img"
                    class="h-8">
                </div>
              </div>
              <div class="mt-4">
                <span class="text-sm">You have € 6.99 left in your wallet.</span>
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox">
                  <span class="ml-2 text-xs">Use funds from my wallet first.</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="relative bg-white shadow-box2">
            <div class="flex-1 overflow-y-auto">
              <div class="flex p-4 justify-between">
                <h4 class="font-semibold">
                  Your order
                </h4>
              </div>
              <hr class="text-grid5">
              <div class="p-4">
                <div class="flex justify-between items-start mb-4">
                  <div class="mr-4 w-16 flex justify-between items-center">
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-minus-circle-outline"></i>
                      </span>
                    </button>
                    <span class="text-grid7 text-sm">1</span>
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-plus-circle-outline"></i>
                      </span>
                    </button>
                  </div>
                  <div class="flex-1 text-sm leading-none">
                    Beef steak│500gr.
                    <p class="text-xs text-grid7 mt-1">
                      500 Gr.
                    </p>
                  </div>
                  <div class="text-sm leading-none text-right">€20.00</div>
                </div>
                <div class="flex justify-between items-start mb-4">
                  <div class="mr-4 w-16 flex justify-between items-center">
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-minus-circle-outline"></i>
                      </span>
                    </button>
                    <span class="text-grid7 text-sm">2</span>
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-plus-circle-outline"></i>
                      </span>
                    </button>
                  </div>
                  <div class="flex-1 text-sm leading-none">
                    Pulled chicken│500gr.
                    <p class="text-xs text-grid7 mt-1">
                      1 Kg.
                    </p>
                  </div>
                  <div class="text-sm leading-none text-right">€12.00</div>
                </div>
                <div class="flex justify-between items-start mb-4">
                  <div class="mr-4 w-16 flex justify-between items-center">
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-minus-circle-outline"></i>
                      </span>
                    </button>
                    <span class="text-grid7 text-sm">2</span>
                    <button>
                      <span class="text-grid2">
                        <i class="mdi mdi-plus-circle-outline"></i>
                      </span>
                    </button>
                  </div>
                  <div class="flex-1 text-sm leading-none">
                    Beef jerkey Paprika Jalopenios│100gr.
                    <p class="text-xs text-grid7 mt-1">
                      Cut in slices <span class="text-grid2">change</span> <br>
                      200 Gr.
                    </p>
                  </div>
                  <div class="text-sm leading-none text-right">€5.80</div>
                </div>
              </div>
              <hr class="text-grid5">
              <div class="flex justify-between px-4 py-1 text-sm">
                <div>Subtotal</div>
                <div>€37.80</div>
              </div>
              <div class="flex justify-between px-4 py-1 text-sm">
                <div>Tax</div>
                <div>€2.80</div>
              </div>
              <div class="flex justify-between px-4 py-1 text-sm">
                <div>Discount</div>
                <div>N/A</div>
              </div>
              <div class="flex justify-between px-4 py-1 text-sm">
                <div>Delivery cost</div>
                <div>€5.00</div>
              </div>
              <div class="flex justify-between px-4 py-1 text-sm">
                <div>Delivery discount</div>
                <div>-€1.50</div>
              </div>
              <div class="p-4">
                <hr class="text-grid5">
                <div class="flex justify-between text-sm py-4">
                  <div>Total</div>
                  <div>€42.80</div>
                </div>
              </div>
            </div>
            <div class="p-4">
              <button
                @click="$emit('go-to-checkout')"
                class="w-full text-center border-2 border-grid14 py-2 rounded text-grid12 font-semibold text-sm mb-2">
                Login to place order
              </button>
              <button
                @click="$emit('go-to-checkout')"
                class="w-full text-center border-2 border-grid11 py-2 rounded text-grid12 font-semibold text-sm">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer show-footer-action-mobile/>
    <FooterActionMobile/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import NavBar from '@/components/general/NavBar.vue'
import Footer from '@/components/general/Footer.vue'
import FooterActionMobile from '@/components/general/FooterActionMobile.vue'
import CardAddress from '@/components/general/CardAddress'

import paypal from '@/assets/images/icons/paypal.svg'
import visa from '@/assets/images/icons/visa.svg'
import mastercard from '@/assets/images/icons/mastercard.svg'
import bancontact from '@/assets/images/icons/bancontact.svg'
import maestro from '@/assets/images/icons/maestro.svg'

export default {
  components: {
    NavBar,
    Footer,
    FooterActionMobile,
    CardAddress
  },
  data () {
    return {
      choiceTime: 0,
      itemsTime: [
        'As soon as possible',
        'Later'
      ],
      choicePayment: 0,
      itemsPayment: [
        {
          label: 'Credit card',
          imgs: [mastercard, visa]
        },
        {
          label: 'Paypal',
          imgs: [paypal]
        },
        {
          label: 'Bancontact',
          imgs: [bancontact, maestro]
        }
      ],
      wallet: {
        value: 0
      },
      confirmChoice: false
    }
  },
  methods: {
    ...mapMutations({
      addToModalView: 'ADD_TO_MODAL_VIEW'
    })
  }
}
</script>

<style>

</style>
