import and from '../and'

describe('and', () => {
  test('Deve retornar verdadeiro apenas quando os dois parametros forem verdadeiros', () => {
    expect(and(true, true)).toBeTruthy()
  })

  test('Deve retornar falso quando primeiro parametro for falso', () => {
    expect(and(false, true)).toBeFalsy()
  })

  test('Deve retornar falso quando o segundo parametro for falso', () => {
    expect(and(true, false)).toBeFalsy()
  })

  test('Deve retornar falso quando os dois parametros forem falso', () => {
    expect(and(false, false)).toBeFalsy()
  })
})
