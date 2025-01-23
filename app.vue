<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
</script>

<template>
  <div class="background">
    <b-nav collapse-at="lg">
      <b-nav-item :to="switchLocalePath('cas')" v-if="$i18n.locale === 'val'">Castellano</b-nav-item>
      <b-nav-item :to="switchLocalePath('val')" v-if="$i18n.locale === 'cas'">Valencià</b-nav-item>
    
      <template #logo-append>
        Donacions
      </template>
    </b-nav>

    <div class="container">
      <NuxtPage />
      <b-footer variant="light" class="footer text-white" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@compromis/blobby/scss/variables';

.background {
    position: relative;
    background-image: url(./assets/images/background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        120deg,
        rgba($gradient-primary-start, .95),
        rgba($gradient-primary-end, .8) 50%,
        rgba($gradient-primary-end, .4)
      );
      z-index: -1;
    }
  }

  .hero {
    margin: 4vh 0;

    h1 {
      font-weight: 500;
      font-size: clamp(4.5rem, 5vw, 7rem);
    }

    .text-7xl {
      font-size: 7rem;
    }
  }

  .section {
    color: $white;
    max-width: 950px;
  }

  .locale-select.input {
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin: -.5rem 0;
  }

  .locale-select-compact.input-field {
    margin: 0 -.5rem;
  }

  .nav-logo-append {
    margin-left: .5em;
  }
</style>
