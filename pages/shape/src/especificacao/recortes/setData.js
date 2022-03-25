import { push } from '@kuba/jsonld'

export default (value) =>
  value && (
    push({
      '@id': '#additionalproperty',
      '@type': 'PropertyValue',
      name: 'Cut-outs',
      value: 'Sim'
    })
  )
