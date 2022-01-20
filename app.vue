<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
import BSelect from '@compromis/blobby/components/inputs/BSelect.vue'
</script>

<template>
  <div class="background">
    <b-nav collapse-at="lg">
      <template #logo-append>
        <nuxt-link to="/">{{ $t('app.title') }}</nuxt-link>
      </template>

      <template #basic-nav>
        <b-select class="d-none d-md-block locale-select" no-label v-model="$i18n.locale">
          <option value="ca">Valencià</option>
          <option value="es">Castellano</option>
        </b-select>
        <b-select class="d-md-none locale-select locale-select-compact" no-label v-model="$i18n.locale">
          <option value="ca">VAL</option>
          <option value="es">CAS</option>
        </b-select>
      </template>
    </b-nav>

    <div class="container">
      <main class="index">
        <header class="hero">
          <h1 class="text-white">{{ $t('app.hero') }}</h1>
        </header>

        <NuxtPage />
      </main>
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
</style>
