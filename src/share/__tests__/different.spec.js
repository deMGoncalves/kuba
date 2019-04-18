import { different } from '../'

test('Deve retornar verdadeiro quando o valor e o tipo dor diferentes', () => {
  expect(different(1, '1')).toBeTruthy()
})

test('Deve retornar falso quando o valor e o tipo for igual', () => {
  expect(different(1, 1)).toBeFalsy()
})
