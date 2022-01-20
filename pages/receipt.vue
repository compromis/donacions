<script setup>
import BCard from '@compromis/blobby/components/card/BCard.vue'
import BCardSection from '@compromis/blobby/components/card/BCardSection.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
import { useFormData } from '@/composables/form-data.js'

const form = useFormData()
</script>

<template>
  <section class="section receipt">
    <b-card size="lg" class="thanks-card" padded>
      <h3 class="mb-5 text-6xl lh-1 text-regular">
        <template v-if="form.first_name">
          {{ $t('receipt.thanks_with_name') }}<br>{{ form.first_name }}
        </template>
        <template v-else>{{ $t('receipt.thanks_alone') }}</template>
      </h3>
      <p v-if="form.method === 'paypal'" class="text-xl text-muted mb-0">
        {{ $t('receipt.thanks_paypal') }}
      </p>
      <p v-if="form.method === 'wire'" class="text-xl text-muted mb-0">
        {{ $t('receipt.thanks_wire') }}
      </p>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/clapping-hands_1f44f.png" class="receipt-emoji" alt="">
    </b-card>
    <template v-if="form.method === 'wire'">
      <h4 class="mt-5 mb-3 text-2xl text-regular">{{ $t('form.wire') }}</h4>
      <b-card content-class="transfer-info">
        <b-card-section border-bottom border-right>
          <div class="text-muted">{{ $t('form.amount') }}</div>
          <div class="text-3xl">{{form.amount}}€</div>
        </b-card-section>
         <b-card-section border-bottom>
          <div class="text-muted">{{ $t('receipt.subject') }}</div>
          <div class="text-3xl">{{form.DNI}} Donació</div>
        </b-card-section>
        <b-card-section class="transfer-info-iban">
          <div class="text-muted">IBAN</div>
          <div class="text-3xl">ES128 912 4891 2941 2123</div>
        </b-card-section>
      </b-card>
    </template>
    <b-button href="https://compromis.net" size="lg" variant="inverted" class="mt-5" has-shadow>
      {{ $t('receipt.back') }} -&gt;
    </b-button>
  </section>
</template>

<style lang="scss">
.thanks-card {
  position: relative;

  .receipt-emoji {
    width: 150px;
    position: absolute;
    top: 25px;
    right: -50px;
  }
}

.transfer-info {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr;

  &-iban {
    grid-column: 1/-1;
  }
}

</style>
