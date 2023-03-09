const modifiers = [
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'display',
  'giant'
]

function size (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'xs'
  return `var(--font-size-${modifier})`
}

export default size
