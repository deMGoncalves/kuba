import arity from '../arity'
import and from '../and'

describe('arity', () => {
  test('Deve redefinir de 2 para 1 parametro a funcao and', () => {
    expect(arity(1, and)).toHaveLength(1)
  })
})
