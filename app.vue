<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
</script>

<template>
  <div class="background">
    <b-nav>
      <template #logo-append>
        <nuxt-link to="/">Donacions</nuxt-link>
      </template>

      <b-nav-item to="/">
        Castellano
      </b-nav-item>
    </b-nav>

    <div class="container">
      <main class="index">
        <header class="hero">
          <h1 class="text-white">Col·labora</h1>
        </header>

        <NuxtPage />
      </main>
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
</style>