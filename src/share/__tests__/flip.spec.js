import { flip } from '../'

const fun = flip((...args) => args)

test('Inverte a sequencia dos parametros antes de executar a funcao alvo', () => {
  expect(fun(1, 2, 3)).toEqual([3, 2, 1])
})
