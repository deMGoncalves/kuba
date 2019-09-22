import always from '../always'

describe('always', () => {
  test('Deve retorna 3.14 na segunda execucao', () => {
    const pi = always(3.14)
    expect(pi()).toBe(3.14)
  })

  test('Deve retornar 3.14 na segunda exeucao mesmo passando um novo parametro', () => {
    const pi = always(3.14)
    expect(pi(4.13)).toBe(3.14)
  })

  test('Deve retornar undefined na segunda execucao', () => {
    const pi = always()
    expect(pi()).toBeUndefined()
  })
})
