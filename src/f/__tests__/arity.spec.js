import arity from '../arity'

var add = (x, y) => x + y
const error = new Error('O primeiro argumento para arity deve ser um número inteiro não negativo e não superior a três')

beforeEach(() => {
  add = arity(1, add)
})

describe('arity', () => {
  test('Deve redefinir de 2 para 1 parametro a funcao and', () => {
    expect(add).toHaveLength(1)
  })

  test('Deve retornar NaN quando executar a funcao add passando os parametros 1, 2', () => {
    expect(add(1, 2)).toBeNaN()
  })

  test('Deve retornar um erro quando a nova definicao de parametro nao for um numero', () => {
    const operation = () => arity('', () => null)
    expect(operation).toThrowError(error)
  })

  test('Deve retornar um erro quando o novo numero de parametro for maior que 3', () => {
    const operation = () => arity(4, () => null)
    expect(operation).toThrowError(error)
  })
})
