import h from '@kuba/h'

export default (value) =>
  h('input', { value })
    .paint()
    .select()
    .execCommand('copy')
