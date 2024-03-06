export const abbreviatedNumber = (number: number) => {
  const convertedNumber = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number)
  return convertedNumber
}
