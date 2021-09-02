import h from '@kuba/h'

export default function (value) {
  const input = h('input', { value }).paint()

  input.select()
  input.execCommand('copy')
}
