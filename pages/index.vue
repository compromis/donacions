<script setup>
import { useAmount } from '@/composables/amount.js'
import BCard from '@compromis/blobby/components/card/BCard.vue'

const router = useRouter()
const { t } = useI18n()
const { max: amountMax, min: amountMin } = useAmount().value
const otherAmount = ref('')
const otherAmountError = ref('')
const donateOtherAmount = () => {
  // Check if otherAmount is an integer
  if (!Number.isInteger(otherAmount.value)) {
    otherAmountError.value = t('errors.integer')
    return
  }

  // Check amount does not exceed max
  if (otherAmount.value > amountMax) {
    otherAmountError.value = t('errors.max', { amount: amountMax })
    return
  }

  // Check amount is more then min
  if (otherAmount.value < amountMin) {
    otherAmountError.value = t('errors.min', { amount: amountMin} )
    return
  }

  const localePath = useLocalePath()
  router.push(localePath({
    name: 'donate-amount',
    params: {
      amount: otherAmount.value
    }
  }))
}
</script>

<template>
  <main>
    <header class="hero">
      <h1 class="text-white" ref="title">{{ $t('app.hero') }}</h1>
    </header>
    <section class="section">
      <h2 class="mb-4">{{ $t('index.title') }}</h2>
      <div class="donate-grid">
        <b-card :to="localePath('/donate/5')" padded rises class="donate-card" content-class="d-flex flex-column h-100">
          <span class="donate-amount text-4xl">5€</span>
          <span class="donate-text text-muted text-2xl">{{ $t('index.donate_5') }}</span>
          <img src="@/assets/images/placard-emoji.png" class="donate-emoji" alt="">
        </b-card>
        <b-card :to="localePath('/donate/10')" padded rises class="donate-card" content-class="d-flex flex-column h-100">
          <span class="donate-amount text-4xl">10€</span>
          <span class="donate-text text-muted text-2xl">{{ $t('index.donate_10') }}</span>
          <img src="@/assets/images/mobile-emoji.png" class="donate-emoji" alt="">
        </b-card>
        <b-card :to="localePath('/donate/30')" padded rises class="donate-card" content-class="d-flex flex-column h-100">
          <span class="donate-amount text-4xl">30€</span>
          <span class="donate-text text-muted text-2xl">{{ $t('index.donate_30') }}</span>
          <img src="@/assets/images/talking-head-emoji.png" class="donate-emoji" alt="">
        </b-card>
        <b-card :to="localePath('/donate/50')" padded rises class="donate-card" content-class="d-flex flex-column h-100">
          <span class="donate-amount text-4xl">50€</span>
          <span class="donate-text text-muted text-2xl">{{ $t('index.donate_50') }}</span>
          <img src="@/assets/images/houses-emoji.png" class="donate-emoji" alt="">
        </b-card>
        <b-card :to="localePath('/donate/100')" padded rises class="donate-card" content-class="d-flex flex-column h-100">
          <span class="donate-amount text-4xl">100€</span>
          <span class="donate-text text-muted text-2xl">{{ $t('index.donate_100') }}</span>
          <img src="@/assets/images/lgtb-emoji.png" class="donate-emoji" alt="">
        </b-card>
        <b-card padded content-class="d-flex h-100">
          <form class="d-flex flex-column h-100 w-100" @submit.prevent="donateOtherAmount">
            <div class="donate-amount text-4xl">
              <input
                type="number"
                name="other_amount"
                :min="amountMin"
                :max="amountMax"
                placeholder="200"
                v-model="otherAmount"
                class="other-amount-input"
              />€
            </div>
            <div v-if="otherAmountError" class="text-red text-sm">
              {{ otherAmountError }}
            </div>
            <div class="donate-text text-muted text-2xl">
              <transition name="fade" mode="out-in">
                <span v-if="!otherAmount">
                  {{ $t('index.donate_other') }}
                </span>
                <div v-else class="card-button-wrapper">
                  <button type="submit" class="card-button">{{ $t('index.continue') }} -&gt;</button>
                </div>
              </transition>
            </div>
          </form>
        </b-card>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import '@compromis/blobby/scss/variables';
  @import 'bootstrap/scss/functions';
  @import 'bootstrap/scss/variables';
  @import 'bootstrap/scss/mixins';

  .donate-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 2rem;
  }

  .donate-card {
    position: relative;
    display: flex;
    aspect-ratio: 1 / 1;

    &:hover {
      color: var(--text-color);
      --scale: 1;
      --rotate: 4deg;
      transform: rotate(-4deg) scale(1.08) !important;
      z-index: 100;
    }

    &:active {
      transform: rotate(1deg) scale(.95) !important;
    }
  }

  .donate-text {
    margin-top: auto;
    line-height: 1.1;
  }

  .donate-emoji {
    position: absolute;
    top: 1rem;
    right: -2.5rem;
    width: 125px;
    transform: scale(var(--scale, 0)) rotate(var(--rotate, 2deg));
    z-index: 10;
    transition: .2s ease;
  }

  .other-amount-input {
    font-size: inherit;
    text-align: right;
    border: 0;
    border-bottom: 2px var(--gray-200) solid;
    width: 3em;
    padding: 0;
    line-height: 1;
    transition: .2s ease;

    &::placeholder {
      color: var(--gray-500);
    }

    &:hover {
      border-bottom-color: var(--gray-300);
    }

    &:focus {
      outline: 0;
      border-bottom-color: var(--gray-500);
    }
  }

  .card-button {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--text-muted);
    display: block;
    text-align: right;
    line-height: 1;
    width: 100%;
    padding: var(--card-padding);
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border-top: 1px var(--gray-200) solid;
    transition: .2s ease;

    &:hover {
      color: var(--text-color);
      background: var(--gray-100);
    }

    &:focus {
      outline: 2px var(--black) solid;
    }

    &-wrapper {
      margin: calc(var(--card-padding) * -1);
    }
  }

  @include media-breakpoint-down(sm) {
    .donate-card {
      aspect-ratio: 1.75 / 1;
    }
  }
</style>
