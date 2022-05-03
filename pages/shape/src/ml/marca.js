import discovery from '@kuba/discovery'

export default (shape) =>
  discovery
    .serie('marca')
    .toScore([shape.marca.nome])
