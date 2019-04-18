import { not } from '../'

test('Deve retornar false quando inverter o valor true', () => {
  expect(not(true)).toBeFalsy()
})

test('Deve retornar true quando inverter o valor false', () => {
  expect(not(false)).toBeTruthy()
})
