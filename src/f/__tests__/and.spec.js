import and from '../and'

describe('and', () => {
  test('Deve retornar verdadeiro apenas quando os dois parametros forem verdadeiros', () => {
    expect(and(true, true)).toBeTruthy()
  })

  test('Deve retornar falso quando primeiro parametro for falso', () => {
    expect(and(false, true)).toBeFalsy()
  })
})
