import { equal } from '../'

test('Deve retornar true quando os objetos comparados forem eguais', () => {
  expect(equal(1, 1)).toBeTruthy()
})

test('Deve retornar false quando os objetos comparados forem diferentes', () => {
  expect(equal(1, '1')).toBeFalsy()
})
