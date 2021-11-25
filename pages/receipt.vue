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
      <h3 class="mb-5 text-6xl lh-1 text-regular">Gràcies, <br>{{form.first_name}}</h3>
      <p v-if="form.method === 'paypal'" class="text-xl text-muted mb-0">Hem rebut la teua donació, moltes gràcies pel teu compromís!</p>
      <p v-if="form.method === 'wire'" class="text-xl text-muted mb-0">Per a completar la teua donació, nomñés has de fer una transferència al següent número de compte. Gràcies pel teu compromís.</p>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/clapping-hands_1f44f.png" class="receipt-emoji" alt="">
    </b-card>
    <template v-if="form.method === 'wire'">
      <h4 class="mt-5 mb-3 text-2xl text-regular">Transferència Bancària</h4>
      <b-card content-class="transfer-info">
        <b-card-section border-bottom border-right>
          <div class="text-muted">Quantitat</div>
          <div class="text-3xl">{{form.amount}}€</div>
        </b-card-section>
         <b-card-section border-bottom>
          <div class="text-muted">Concepte</div>
          <div class="text-3xl">{{form.DNI}} Donació</div>
        </b-card-section>
        <b-card-section class="transfer-info-iban">
          <div class="text-muted">IBAN</div>
          <div class="text-3xl">12891248912941212340</div>
        </b-card-section>
      </b-card>
    </template>
    <b-button href="https://compromis.net" size="lg" variant="inverted" class="mt-5" has-shadow >
      Torna a compromis.net ->
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
