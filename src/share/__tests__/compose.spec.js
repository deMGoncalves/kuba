import { compose } from '../'

const concatB = (x) => x + 'B'
const concatC = (x) => x + 'C'

test('Deve executar os metodos da direita para a esquerda', () => {
  expect(compose(concatC, concatB)('A')).toBe('ABC')
})
