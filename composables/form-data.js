export const useFormData = () => useState('formData', () => ({
  amount: 0,
  fund: '0',
  method: 'paypal',
  first_name: '',
  last_name: '',
  email: '',
  DNI: '',
  address: '',
  municipality: '',
  postal_code: '',
  accept: false
}))
