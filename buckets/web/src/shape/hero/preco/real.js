import * as f from '@kuba/f'

const real = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency'
})

f.assign(real, {
  is: f.equal('pt-BR')
})

export default real
