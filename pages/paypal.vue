<script setup>
  import { onMounted, ref } from 'vue'
  import { useFormData } from '@/composables/form-data.js'
  const form = useFormData()
  const PayPalButton = ref(null)
  onMounted(() => {
    document.getElementById('PayPalButton').click();
  })
</script>

<template>
  <div class="text-center">
    <div class="text-white text-3xl text-center">Redirigint a PayPal...</div>
    <form action="https://www.paypal.com/cgi-bin/webscr" id="PayPalPay" method="post">
      <input type="hidden" name="business" value="info@coaliciocompromis.net"> 
      <input type="hidden" name="cmd" value="_donations">  
      <input type="hidden" name="item_name" :value="`Donatiu - ${form.DNI}`"> 
      <input type="hidden" name="item_number" :value="form.DNI"> 
      <input type="hidden" name="currency_code" value="EUR">  
      <input type="hidden" name="amount" :value="form.amount">  
      <input type="hidden" name="hosted_button_id" value="WM4BS57LUNX6L">
      <input type="submit" class="button button-default button-lg" name="submit" ref="PayPalButton" id="PayPalButton" value="Pagar amb Paypal" />
    </form>
  </div>
</template>