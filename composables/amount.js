export const useAmount = () => useState('amount', () => ({
  min: 5,
  max: 10000
}))
