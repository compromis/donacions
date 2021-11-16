<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BField from '@compromis/blobby/components/inputs/BField.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'

// Amount to donate
const route = useRoute()
const router = useRouter()
const amount = route.params.amount

// Personal data
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  DNI: ''
})

// Redirect back if invalid amount
onMounted(() => {
  if (isNaN(amount) || amount > 10000) {
    router.push('/')
  }
})
</script>

<template>
  <div>
    <section class="section mb-5">
      <b-input-group title="Contribució">
          <b-field span="2" label="Quantitat">
            <span class="text-xl">{{ amount }}€</span>
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
