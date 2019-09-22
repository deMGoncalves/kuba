import always from '../always'

describe('always', () => {
  test('Deve retorna uma funcao que ao ser executado retorna o valor fornecido na primeira chamada', () => {
    const pi = always(3.14)
    expect(pi()).toBe(3.14)
  })
})
