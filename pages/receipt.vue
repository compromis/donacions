<script setup>
import BCard from '@compromis/blobby/components/card/BCard.vue'
import BCardSection from '@compromis/blobby/components/card/BCardSection.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'
import { useFormData } from '@/composables/form-data.js'

const form = useFormData()
</script>

<template>
  <main class="section receipt">
    <b-card size="lg" class="thanks-card" padded>
      <h3 class="mb-5 text-6xl sm:text-5xl lh-1 text-regular">
        <template v-if="form.first_name">
          Gràcies, <br>{{ form.first_name }}
        </template>
        <template v-else>Gràcies!</template>
      </h3>
      <p v-if="form.method === 'paypal'" class="receipt-text text-xl text-muted mb-0">
        Hem rebut la teua donació, moltes gràcies pel teu compromís!
      </p>
      <p v-if="form.method === 'wire'" class="receipt-text text-xl text-muted mb-0">
        Per a completar la teua donació, només has de fer una transferència al següent número de compte. Gràcies pel teu compromís!
      </p>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/clapping-hands_1f44f.png" class="receipt-emoji" alt="">
    </b-card>

    <template v-if="form.method === 'wire'">
      <h4 class="mt-5 mb-3 text-2xl text-bold">Transferència bancària</h4>
      <b-card content-class="transfer-info">
        <b-card-section border-bottom border-right class="span-1 sm:span-2">
          <div class="text-muted">Quantitat</div>
          <div class="text-2xl">{{ form.amount }}€</div>
        </b-card-section>
         <b-card-section border-bottom class="span-1 sm:span-2">
          <div class="text-muted">Concepte</div>
          <div class="text-2xl">{{ form.DNI }} Donació</div>
        </b-card-section>
        <b-card-section class="span-2" border-bottom>
          <div class="text-muted">IBAN</div>
          <div class="text-2xl">ES54 3159 0066 9826 7810 2829</div>
        </b-card-section>
        <b-card-section class="sm:span-2" border-right>
          <div class="text-muted">BIC</div>
          <div class="text-2xl">BCOEESMM159</div>
        </b-card-section>
        <b-card-section class="sm:span-2">
          <div class="text-muted">Nom entitat</div>
          <div class="text-2xl">Caixa Popular-Caixa Rural, S.C.C.V.</div>
        </b-card-section>
      </b-card>
    </template>
    <b-button href="https://compromis.net" size="lg" variant="inverted" class="mt-5" has-shadow>
      Torna a compromis.net -&gt;
    </b-button>
  </main>
</template>

<style lang="scss">
.receipt {
  padding: 10vh 0 5vh;
}

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
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
}

@media (max-width: 750px) {
  .thanks-card {
    .receipt-emoji {
      top: auto;
      width: 125px;
      bottom: 25px;
      right: -35px;
    }

    .receipt-text {
      padding-right: 100px;
    }
  }
}
</style>
