import { arity } from '../'

const add = arity(2, (first, ...args) =>
  args.reduce(
    (a, b) => a + b,
    first
  ))

test('Deve alterar o numero de parametros conforme o numero especificado', () => {
  expect(add).toHaveLength(2)
  expect(add(2, 3)).toBe(5)
})
