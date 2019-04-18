import { __, is } from '../'

test('Deve retornar uma funcao complementar quando passar nenhum parametro', () => {
  expect(is()).toBeInstanceOf(Function)
})

test('Deve retornar uma funcao complementar quando passar um parametro de dois', () => {
  expect(is(String)).toBeInstanceOf(Function)
  expect(is(__, 'cleber')).toBeInstanceOf(Function)
})

test('Deve executar a funcao quando passar dois parametro de dois', () => {
  expect(is(String, 'cleber')).toBe(true)
  expect(is(String)('cleber')).toBe(true)
})

test('Deve retornar verdadeiro quando comparar o valor com o tipo String', () => {
  expect(is(String, '')).toBeTruthy()
  expect(is(String, 0)).toBeFalsy()
  expect(is(String, [])).toBeFalsy()
  expect(is(String, {})).toBeFalsy()
  expect(is(String, new Date())).toBeFalsy()
  expect(is(String, () => {})).toBeFalsy()
})

test('Deve retornar verdadeiro quando comparar o valor com o tipo Number', () => {
  expect(is(Number, '')).toBeFalsy()
  expect(is(Number, 0)).toBeTruthy()
  expect(is(Number, [])).toBeFalsy()
  expect(is(Number, {})).toBeFalsy()
  expect(is(Number, new Date())).toBeFalsy()
  expect(is(Number, () => {})).toBeFalsy()
})

test('Deve retornar verdadeiro quando comparar o valor com o tipo Array', () => {
  expect(is(Array, '')).toBeFalsy()
  expect(is(Array, 0)).toBeFalsy()
  expect(is(Array, [])).toBeTruthy()
  expect(is(Array, {})).toBeFalsy()
  expect(is(Array, new Date())).toBeFalsy()
  expect(is(Array, () => {})).toBeFalsy()
})

test('Deve retornar verdadeiro quando comparar o valor com o tipo Date', () => {
  expect(is(Date, '')).toBeFalsy()
  expect(is(Date, 0)).toBeFalsy()
  expect(is(Date, [])).toBeFalsy()
  expect(is(Date, {})).toBeFalsy()
  expect(is(Date, new Date())).toBeTruthy()
  expect(is(Date, () => {})).toBeFalsy()
})

test('Deve retornar verdadeiro quando comparar o valor com o tipo Function', () => {
  expect(is(Function, '')).toBeFalsy()
  expect(is(Function, 0)).toBeFalsy()
  expect(is(Function, [])).toBeFalsy()
  expect(is(Function, {})).toBeFalsy()
  expect(is(Function, new Date())).toBeFalsy()
  expect(is(Function, () => {})).toBeTruthy()
})

test('Deve retornar falso quando comparar o valor null com qualquer tipo', () => {
  expect(is(String, null)).toBeFalsy()
  expect(is(Number, null)).toBeFalsy()
  expect(is(Array, null)).toBeFalsy()
  expect(is(Date, null)).toBeFalsy()
  expect(is(Function, null)).toBeFalsy()
})
