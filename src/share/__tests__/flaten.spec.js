import { flatten } from '../'

test('Deve retornar um array com um unico nivel quando achatar um array de nivel unico', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
})

test('Deve retornar um array com um unico nivel quando achatar um array de nivel duplo', () => {
  expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
})
