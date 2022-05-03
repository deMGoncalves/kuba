import discovery from '@kuba/discovery'

export default (shape) =>
  discovery
    .serie('tamanho')
    .toScore([shape.tamanho.valor])
