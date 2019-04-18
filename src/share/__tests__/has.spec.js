import { has } from '../'

test('Deve retornar verdadeiro quando o parametro for definido', () => {
  expect(has(true)).toBeTruthy()
  expect(has(false)).toBeFalsy()
  expect(has(null)).toBeFalsy()
  expect(has(undefined)).toBeFalsy()
  expect(has({})).toBeTruthy()
  expect(has([])).toBeTruthy()
  expect(has(new Date())).toBeTruthy()
})
