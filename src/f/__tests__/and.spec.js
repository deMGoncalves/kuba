import and from '../and'

describe('and', () => {
  test('Deve retornar verdadeiro quando os dois parametros forem verdadeiros', () => {
    expect(and(true, true)).toBeTruthy()
  })
})
