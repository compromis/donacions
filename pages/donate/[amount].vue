<script setup>
import qs from 'qs'
import axios from 'axios'
import { reactive, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFormData } from '~/composables/form-data.js'
import { useAmount } from '~/composables/amount.js'

import BField from '@compromis/blobby/components/inputs/BField.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BSelect from '@compromis/blobby/components/inputs/BSelect.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import BRadioGroup from '@compromis/blobby/components/inputs/BRadioGroup.vue'
import BRadio from '@compromis/blobby/components/inputs/BRadio.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
import PencilIcon from '@/components/icons/PencilIcon.vue'

// Api base
const API_BASE = 'https://compromis.net/espai/donations/'

// Amount to donate
const { max: amountMax, min: amountMin } = useAmount().value
const route = useRoute()
const router = useRouter()
const amount = route.params.amount

// Funds
const { data: funds } = await useFetch(API_BASE + 'funds')

// Personal data
const formData = useFormData()
const form = reactive(formData.value)
watch(() => form, (form) => { formData.value = form }, { deep: true })

// Redirect back if invalid amount
onMounted(() => {
  if (isNaN(amount) || amount > amountMax || amount < amountMin) {
    router.push('/')
  }

  form.amount = amount
})

// Errors
const errors = ref([])

// Submit form
const submitDonation = async () => {
  const redirectTo = { paypal: 'paypal', wire: 'receipt' }
  const { data } = await axios.post(API_BASE + 'submit', qs.stringify(form), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
  })
  formData.value = form
  if (data.status === 'ok') {
    router.push({ name: redirectTo[form.method] })
  } else {
    errors.value = data.errors
  }
}
</script>

<template>
  <form @submit.prevent="submitDonation">
    <section class="section mb-5">
      <b-input-group title="Contribució">
          <b-field :span="['span-2', 'sm:span-4']" label="Quantitat">
            <div class="d-flex">
              <span class="text-xl">{{ amount }}€</span>
              <nuxt-link to="/" class="edit-button link-muted-to-black" title="Edita quantitat">
                <pencil-icon />
              </nuxt-link>
            </div>
          </b-field>
          <b-select name="fund" label="Fons" variant="float" :span="['span-2', 'sm:span-4']" v-model="form.fund">
            <optgroup v-for="fundGroup in funds" :key="fundGroup.name" :label="fundGroup.name">
              <option v-for="fund in fundGroup.funds" :key="fund.id" :value="fund.id">{{ fund.name }}</option>
            </optgroup>
          </b-select>
      </b-input-group>
    </section>
    <section class="section mb-5">
      <b-input-group title="Dades personals">
          <b-input
            variant="float"
            label="Nom"
            name="first_name"
            v-model="form.first_name"
            :error="errors.first_name"
            :span="['span-2', 'sm:span-4']"
            autocomplete="given-name"
            required
          />
          <b-input
            variant="float"
            label="Cognoms"
            name="last_name"
            v-model="form.last_name"
            :error="errors.last_name"
            :span="['span-2', 'sm:span-4']"
            autocomplete="family-name"
            required
          />
          <b-input
            variant="float"
            type="email" 
            label="E-mail"
            name="email"
            v-model="form.email"
            :error="errors.email"
            :span="['span-2', 'sm:span-4']"
            autocomplete="email"
            inputmode="email"
            required
          />
          <b-input
            variant="float" 
            label="DNI/NIE"
            name="DNI"
            v-model="form.DNI"
            :error="errors.DNI"
            :span="['span-2', 'sm:span-4']"
            required
          />
          <b-input
            variant="float" 
            label="Adreça"
            name="address"
            v-model="form.address"
            :error="errors.address"
            :span="['span-2', 'sm:span-4']"
            autocomplete="street-address"
          />
          <b-input
            variant="float" 
            label="Municipi"
            name="municipality"
            v-model="form.municipality"
            :error="errors.municipality"
            :span="['span-1', 'sm:span-2']"
            autocomplete="address-level2"
            required
          />
          <b-input
            variant="float" 
            label="Codi postal"
            name="postal_code"
            v-model="form.postal_code"
            :error="errors.postal_code"
            :span="['span-1', 'sm:span-2']"
            pattern="\d*"
            inputmode="decimal"
            autocomplete="postal-code"
            required
          />
        </b-input-group>
    </section>
    <section class="section">
      <b-radio-group title="Pagament">
        <b-radio name="payment_method" value="paypal" focus-dark :card="{ size: 'sm' }" v-model="form.method" class="payment-method paypal">
          <img src="~assets/images/paypal.png" alt="PayPal, Visa, MasterCard" />
        </b-radio>
        <b-radio name="payment_method" value="wire" focus-dark :card="{ size: 'sm' }" v-model="form.method" class="payment-method wire text-lg">
          Transferència bancaria
        </b-radio>
      </b-radio-group>
    </section>

    <b-button type="submit" variant="inverted" size="xl" class="text-bold mt-5" has-shadow focus-dark>
      {{ form.method == 'paypal' ? 'Pagar amb PayPal' : 'Següent pas' }} &gt;
    </b-button>
  </form>
</template>

<style lang="scss" scoped>
  @import '@compromis/blobby/scss/variables';

  .edit-button {
    margin-left: auto;

    svg {
      width: 1em;
      height: 1em;
    }
  }

  .payment-method {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px var(--white) solid;

    &.paypal {
      &.selected {
        border-color: #223F82;
      }

      img {
        height: 3rem;
      }
    }

    &.selected {
      background: var(--white) !important;
      border-color: var(--gray-900);
      color: var(--text-color) !important;
    }

    &:focus-within {
      box-shadow: none !important;
    }
  }
</style>
