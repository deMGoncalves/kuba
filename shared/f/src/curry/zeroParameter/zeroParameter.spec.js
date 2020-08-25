import zeroParameter from './zeroParameter'

describe('f.curry.zeroParameter', function () {
  test('retorna uma funcao callback para executar a funcao alvo', function () {
    const x = () => 'rex'
    const y = zeroParameter(x)

    expect(y()).toBe('rex')
  })

  test('funcao callback repassar todos os parameteros para a funcao alvo', function () {
    const x = (a, b) => a + b
    const y = zeroParameter(x)

    expect(y('rex', '.js')).toBe('rex.js')
  })
})
