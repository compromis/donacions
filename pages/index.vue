<script setup>
import BCard from '@compromis/blobby/components/card/BCard.vue'
</script>

<template>
  <section class="section">
    <h2 class="mb-4">Quant vols aportar hui?</h2>
    <div class="donate-grid">
      <b-card to="/donate/5" href="/donate/5" padded rises class="donate-card" content-class="d-flex flex-column h-100">
        <span class="donate-amount text-4xl">5€</span>
        <span class="donate-text text-muted text-2xl">Ajudes a fer 30 cartells</span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/envelope_2709-fe0f.png" class="donate-emoji" alt="">
      </b-card>
      <b-card to="/donate/10" href="/donate/10" padded rises class="donate-card" content-class="d-flex flex-column h-100">
        <span class="donate-amount text-4xl">10€</span>
        <span class="donate-text text-muted text-2xl">Ajudes a enviar 50 cartes amb paperetes</span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/microphone_1f3a4.png" class="donate-emoji" alt="">
      </b-card>
      <b-card to="/donate/30" href="/donate/30" padded rises class="donate-card" content-class="d-flex flex-column h-100">
        <span class="donate-amount text-4xl">30€</span>
        <span class="donate-text text-muted text-2xl">100 cartells electorals</span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/speak-no-evil-monkey_1f64a.png" class="donate-emoji" alt="">
      </b-card>
      <b-card to="/donate/50" href="/donate/50" padded rises class="donate-card" content-class="d-flex flex-column h-100">
        <span class="donate-amount text-4xl">50€</span>
        <span class="donate-text text-muted text-2xl">1 estand informatiu</span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/speaking-head_1f5e3-fe0f.png" class="donate-emoji" alt="">
      </b-card>
      <b-card to="/donate/100" href="/donate/100" padded rises class="donate-card" content-class="d-flex flex-column h-100">
        <span class="donate-amount text-4xl">100€</span>
        <span class="donate-text text-muted text-2xl">20 pancartes de carrer</span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/dog-face_1f436.png" class="donate-emoji" alt="">
      </b-card>
      <b-card padded>
        Other
      </b-card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@compromis/blobby/scss/variables';

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
</style>