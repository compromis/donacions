<script setup>
import { BNav } from '@compromis/blobby'
</script>

<template>
  <div class="background">
    <b-nav>
      <template #logo-append>
        <nuxt-link to="/">Donacions</nuxt-link>
      </template>
    </b-nav>

    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>