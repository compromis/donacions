<script setup>
  import { onMounted, ref } from 'vue'
  import { useFormData } from '@/composables/form-data.js'
  const form = useFormData()
  onMounted(() => {
    const PayPalButton = ref(null)
    console.log('Mounted', PayPalButton.value)
    PayPalButton.value.click();
  })
</script>

<template>
  <main class="text-center text-white">
    <h1 class="text-3xl text-center">Redirigint a PayPal...</h1>
    <p class="mt-4 text-xl">Si no et redirigeix automàticament, fes clic al següent botó:</p>
    <form action="https://www.paypal.com/cgi-bin/webscr" id="PayPalPay" method="post">
      <input type="hidden" name="business" value="info@coaliciocompromis.net"> 
      <input type="hidden" name="cmd" value="_donations">  
      <input type="hidden" name="item_name" :value="`Donatiu - ${form.DNI}`"> 
      <input type="hidden" name="item_number" :value="form.DNI"> 
      <input type="hidden" name="currency_code" value="EUR">  
      <input type="hidden" name="amount" :value="form.amount">  
      <input type="hidden" name="hosted_button_id" value="WM4BS57LUNX6L">
      <input type="submit" class="button button-inverted button-solid button-lg mt-4" name="submit" ref="PayPalButton" id="PayPalButton" value="Pagar amb Paypal" />
    </form>
  </main>
</template>