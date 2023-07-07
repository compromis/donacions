<script setup>
import qs from 'qs'
import axios from 'axios'
import { useFormData } from '~/composables/form-data.js'
import { useAmount } from '~/composables/amount.js'

import BField from '@compromis/blobby/components/inputs/BField.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BSelect from '@compromis/blobby/components/inputs/BSelect.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import BRadioGroup from '@compromis/blobby/components/inputs/BRadioGroup.vue'
import BRadio from '@compromis/blobby/components/inputs/BRadio.vue'
import BCheckbox from '@compromis/blobby/components/inputs/BCheckbox.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
import PencilIcon from '@/components/icons/PencilIcon.vue'

// Api base
const API_BASE = 'https://compromis.net/espai/donations/'
const localePath = useLocalePath()

// Amount to donate
const { max: amountMax, min: amountMin } = useAmount().value
const route = useRoute()
const router = useRouter()
const amount = route.params.amount

// Funds
const { pending, data: funds } = await useFetch(API_BASE + 'funds', {lazy: true})

// Personal data
const formData = useFormData()
const form = reactive(formData.value)
watch(() => form, (form) => { formData.value = form }, { deep: true })

// Redirect back if invalid amount
onMounted(() => {
  if (isNaN(amount) || amount > amountMax || amount < amountMin) {
    router.push(localePath('/'))
  }

  form.amount = amount
})

// Errors
const errors = ref([])

// Submit form
const { t } = useI18n()
const submitDonation = async () => {
  if (!form.accept) {
    alert(t('errors.accept'))
    return
  }

  const redirectTo = { paypal: 'paypal', wire: 'receipt' }
  const { data } = await axios.post(API_BASE + 'submit', qs.stringify(form), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
  })
  formData.value = form
  if (data.status === 'ok') {
    router.push(localePath({ name: redirectTo[form.method] }))
  } else {
    errors.value = data.errors
  }
}
</script>

<template>
  <main>
    <header class="hero">
      <h1 class="text-white">{{ $t('app.hero') }}</h1>
    </header>
    <form @submit.prevent="submitDonation">
      <section class="section mb-5">
        <b-input-group :title="$t('form.contribution')">
            <b-field :span="['span-2', 'sm:span-4']" :label="$t('form.amount')">
              <div class="d-flex">
                <span class="text-xl">{{ amount }}€</span>
                <nuxt-link :to="localePath('/')" class="edit-button link-muted-to-black" :title="$t('form.edit')">
                  <pencil-icon />
                </nuxt-link>
              </div>
            </b-field>
            <b-select name="fund" :label="$t('form.fund')" variant="float" :span="['span-2', 'sm:span-4']" v-model="form.fund">
              <template v-if="!pending">
                <optgroup v-for="fundGroup in funds" :key="fundGroup.name" :label="fundGroup.name">
                  <option v-for="fund in fundGroup.funds" :key="fund.id" :value="fund.id">{{ fund.name }}</option>
                </optgroup>
              </template>
              <template v-else>
                <option disabled>{{ $t('form.loading') }}</option>
              </template>
            </b-select>
        </b-input-group>
      </section>
      <section class="section mb-5">
        <b-input-group :title="$t('form.personal_data')">
            <b-input
              variant="float"
              :label="$t('form.first_name')"
              name="first_name"
              v-model="form.first_name"
              :error="errors.first_name"
              :span="['span-2', 'sm:span-4']"
              autocomplete="given-name"
              required
            />
            <b-input
              variant="float"
              :label="$t('form.last_name')"
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
              :label="$t('form.email')"
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
              :label="$t('form.ID')"
              name="DNI"
              v-model="form.DNI"
              :error="errors.DNI"
              :span="['span-2', 'sm:span-4']"
              required
            />
            <b-input
              variant="float" 
              :label="$t('form.address')"
              name="address"
              v-model="form.address"
              :error="errors.address"
              :span="['span-2', 'sm:span-4']"
              autocomplete="street-address"
            />
            <b-input
              variant="float" 
              :label="$t('form.municipality')"
              name="municipality"
              v-model="form.municipality"
              :error="errors.municipality"
              :span="['span-1', 'sm:span-2']"
              autocomplete="address-level2"
              required
            />
            <b-input
              variant="float" 
              :label="$t('form.postal_code')"
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
        <b-radio-group :title="$t('form.payment')">
          <b-radio name="payment_method" value="paypal" focus-dark :card="{ size: 'sm' }" v-model="form.method" class="payment-method paypal">
            <img src="~assets/images/paypal.png" :alt="$t('form.paypal')" />
          </b-radio>
          <b-radio name="payment_method" value="wire" focus-dark :card="{ size: 'sm' }" v-model="form.method" class="payment-method wire text-lg">
            {{ $t('form.wire') }}
          </b-radio>
        </b-radio-group>
      </section>

      <section class="section">
        <p class="text-sm text-white mt-5">
          Compromís en compliment del que estableix la <strong>Llei Orgànica 3/2018 del 5 de desembre</strong>, de <strong>Protecció de Dades Personals i Drets Digitals</strong>,
          li informem que les dades personals que va a proporcionar-nos seran incorporades a un fitxer automatitzat de <strong>Compromís</strong>,
          que com a responsable del fitxer, tractarà els mateixos a fi de tramitar la seua donació. Les dades no seran proporcionades a tercers a excepció que existisca una obligació legal.
          Així mateix, li informem que podrà exercir els drets que li assisteixen d'accés, rectificació, cancel·lació i oposició al tractament de la informació que
          li concerneix a través de correu postal a Compromís (Plaça del Pilar, 1 - 46001 València)
          o bé per mitjà d'un correu electrònic a <a href="mailto:dades@compromis.net" class="link-white link-underlined">dades@compromis.net</a>, acompanyant una fotocòpia del document que acredite la seua identitat.
          Més informació en <a href="https://compromis.net/avis-legal/" class="link-white link-underlined">Avís legal i política de privacitat</a>.
        </p>

        <b-checkbox name="accept" class="text-white" v-model="form.accept" dark required>
          {{ $t('form.accept') }}
        </b-checkbox>
      </section>

      <b-button type="submit" variant="inverted" size="xl" class="text-bold mt-5" has-shadow focus-dark>
        {{ form.method == 'paypal' ? $t('form.button_paypal') : $t('form.button_wire') }} &gt;
      </b-button>
    </form>
  </main>
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
    min-height: 5.25rem;

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
