import { prop } from '../'

const programmer = {
  name: 'Cleber de Moraes',
  age: 30
}

test('Deve retornar Cleber de Moraes quando executar a funcao', () => {
  expect(prop('name', programmer)).toBe('Cleber de Moraes')
})
