import always from '../always'

describe('always', () => {
  test('Deve retorna uma funcao que sempre ao ser executado ira devolver o parametro da primeira execucao', () => {
    const pi = always(3.14)
    expect(pi()).toBe(3.14)
  })

  test('Deve retornar o parametro da primeira chamada mesmo passando um novo parametro', () => {
    const pi = always(3.14)
    expect(pi(4.13)).toBe(3.14)
  })
})
