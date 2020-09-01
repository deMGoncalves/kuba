import throwParameters from './throwParameters'

describe('f.curry.throwParameters', function () {
  test('devolve um erro quando executar a funcao', function () {
    expect(throwParameters).toThrow()
  })
})
