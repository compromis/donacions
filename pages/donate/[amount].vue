<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BField from '@compromis/blobby/components/inputs/BField.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BSelect from '@compromis/blobby/components/inputs/BSelect.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import BRadioGroup from '@compromis/blobby/components/inputs/BRadioGroup.vue'
import BRadio from '@compromis/blobby/components/inputs/BRadio.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
import PencilIcon from '../../components/icons/PencilIcon.vue'

const amountMax = 10000
const amountMin = 5

// Amount to donate
const route = useRoute()
const router = useRouter()
const amount = route.params.amount

// Personal data
const form = reactive({
  fund: 1,
  method: 'paypal',
  first_name: '',
  last_name: '',
  email: '',
  DNI: '',
  address: '',
  municipality: '',
  postal_code: ''
})

// Redirect back if invalid amount
onMounted(() => {
  if (isNaN(amount) || amount > amountMax || amount < amountMin) {
    router.push('/')
  }
})
</script>

<template>
  <div>
    <section class="section mb-5">
      <b-input-group title="Contribució">
          <b-field span="2" label="Quantitat">
            <div class="d-flex">
              <span class="text-xl">{{ amount }}€</span>
              <nuxt-link to="/" class="edit-button link-muted-to-black" title="Edita quantitat">
                <pencil-icon />
              </nuxt-link>
            </div>
          </b-field>
          <b-select name="fund" label="Fons" variant="float" span="2" v-model="form.fund">
            <option value="1" selected>Compromís</option>
            <option value="Més">Més</option>
            <option value="Més">Iniciativa</option>
            <option value="Més">VerdsEquo</option>
            <optgroup label="Col·lectius locals">
              <option value="Torrent">Torrent</option>
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
            span="2"
            autocomplete="given-name"
            required
          />
          <b-input
            variant="float"
            label="Cognoms"
            name="last_name"
            v-model="form.last_name"
            span="2"
            autocomplete="family-name"
            required
          />
          <b-input
            variant="float"
            type="email" 
            label="E-mail"
            name="email"
            v-model="form.email"
            span="2"
            autocomplete="email"
            inputmode="email"
            required
          />
          <b-input
            variant="float" 
            label="DNI/NIE"
            name="DNI"
            v-model="form.DNI"
            span="2"
            required
          />
          <b-input
            variant="float" 
            label="Adreça"
            name="address"
            v-model="form.address"
            span="2"
            autocomplete="street-address"
          />
          <b-input
            variant="float" 
            label="Municipi"
            name="municipality"
            v-model="form.municipality"
            span="1"
            autocomplete="address-level2"
            required
          />
          <b-input
            variant="float" 
            label="Codi postal"
            name="postal_code"
            v-model="form.postal_code"
            span="1"
            pattern="\d*"
            inputmode="decimal"
            autocomplete="postal-code"
            required
          />
        </b-input-group>
    </section>
    <section class="section">
      <b-radio-group title="Pagament">
        <b-radio name="payment_method" value="paypal" :card="{ size: 'sm' }" v-model="form.method" class="payment-method paypal">
          <img src="~assets/images/paypal.png" alt="PayPal, Visa, MasterCard" />
        </b-radio>
        <b-radio name="payment_method" value="wire" :card="{ size: 'sm' }" v-model="form.method" class="payment-method wire text-lg">
          Transferència bancaria
        </b-radio>
      </b-radio-group>
    </section>
    <b-button variant="inverted" size="xl" class="mt-5 text-bold" has-shadow focus-dark>
      {{ form.method == 'paypal' ? 'Pagar amb PayPal' : 'Següent pas' }} &gt;
    </b-button>
  </div>
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
