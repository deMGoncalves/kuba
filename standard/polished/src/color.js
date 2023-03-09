const colors = [
  'complete',
  'danger',
  'info',
  'master',
  'menu',
  'primary',
  'success',
  'warning'
]

const modifiers = [
  'darkest',
  'darker',
  'dark',
  'light',
  'lighter',
  'lightest'
]

function color (props) {
  const color = colors.find((color) => props[color]) ?? 'master'
  const modifier = modifiers.find((modifier) => props[modifier])
  return `var(--color-${[color, modifier].filter(Boolean).join('-')})`
}

export default color
