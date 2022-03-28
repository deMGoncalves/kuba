import { push } from '@kuba/jsonld'

export default (target) =>
  target.valor && (
    push({
      '@id': '#additionalproperty',
      '@type': 'PropertyValue',
      description: target.descricao,
      name: target.nome,
      value: 'Sim'
    })
  )
