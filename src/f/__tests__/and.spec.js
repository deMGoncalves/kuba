import and from '../and'
import __ from '../gap'

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

  test('Deve retornar a funcao callback quando executar a funcao apenas com o primeiro parametro', () => {
    expect(and(true, __)).toEqual(expect.any(Function))
  })

  test('Deve retornar verdadeiro na segunda execucao quando terminar de passar o segundo parametro', () => {
    expect(and(true, __)(true)).toBeTruthy()
  })

  test('Deve retornar a funcao callback quando executar a funcao apenas com o segundo parametro', () => {
    expect(and(__, false)).toEqual(expect.any(Function))
  })

  test('Deve retornar falso na segunda execucao quando terminar de passar o primeiro parametro', () => {
    expect(and(__, false)(false)).toBeFalsy()
  })
})
