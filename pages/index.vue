<script setup>
import { reactive } from 'vue'
import { BInputGroup, BInput } from '@compromis/blobby'

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  DNI: ''
})
</script>

<template>
  <main class="index">
    <header class="hero">
      <h1 class="text-7xl text-white">Col·labora</h1>
    </header>
    <section class="section">
      {{ form }}
      <input type="text" v-model="form.first_name" />
      <b-input-group title="Dades personals">
        <b-input
          variant="float"
          label="Nom"
          name="first_name"
          v-model="form.first_name"
          span="2"
        />
        <b-input
          variant="float"
          label="Cognoms"
          name="last_name"
          v-model="form.last_name"
          span="2"
        />
        <b-input
          variant="float"
          type="email" 
          label="E-mail"
          name="email"
          v-model="form.email"
          span="2"
        />
        <b-input
          variant="float" 
          label="DNI/NIE"
          name="DNI"
          v-model="form.DNI"
          span="2"
        />
      </b-input-group>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import '@compromis/blobby/scss/variables';

  .hero {
    margin: 4vh 0;

    h1 {
      font-weight: 500;
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