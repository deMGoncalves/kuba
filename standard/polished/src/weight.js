const modifiers = [
  'bold',
  'medium',
  'regular'
]

function weight (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'regular'
  return `var(--font-weight-${modifier})`
}

export default weight
