import __, { isGap } from '../__'

test('Deve retornar um hash quando acessar o modulo __', () => {
  expect(typeof __).toBe('string')
})

test('Deve retornar verdadeiro quando isGap testar o __', () => {
  expect(isGap(__)).toBeTruthy()
})

test('Deve retornar falso quando isGap testar qualquer outro valor', () => {
  expect(isGap('')).toBeFalsy()
  expect(isGap(0)).toBeFalsy()
  expect(isGap([])).toBeFalsy()
  expect(isGap({})).toBeFalsy()
  expect(isGap(null)).toBeFalsy()
  expect(isGap(undefined)).toBeFalsy()
  expect(isGap(new Date())).toBeFalsy()
})
