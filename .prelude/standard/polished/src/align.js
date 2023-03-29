const modifiers = [
  'left',
  'center',
  'right'
]

function align (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'inherit'
}

export default align

