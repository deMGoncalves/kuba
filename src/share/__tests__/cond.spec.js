import { cond } from '../'

const mood = cond(
  [(x) => x === true, () => 'feliz'],
  [(x) => x === false, () => 'triste']
)

test('Deve retornar a string "feliz" quando executar a funcao condicional', () => {
  expect(mood(true)).toBe('feliz')
})

test('Deve retornar a string "triste" quando executr a funcao condicional', () => {
  expect(mood(false)).toBe('triste')
})
