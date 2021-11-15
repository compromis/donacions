<script setup>
import { reactive } from 'vue'
import BField from '@compromis/blobby/components/inputs/BField.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  DNI: ''
})
</script>

<template>
  <div>
    <section class="section mb-5">
      <b-input-group title="Contribució">
          <b-field span="2" label="Quantitat" label-for="Noething">
            {{ $route.params.amount }}€
          </b-field>
      </b-input-group>
    </section>
    <section class="section">
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
  </div>
</template>
