const modifiers = [
  'base',
  'highlight'
]

function family (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'base'
  return `var(--font-family-${modifier})`
}

export default family
