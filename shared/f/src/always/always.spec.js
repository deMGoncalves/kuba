import * as f from '@rex/f'

describe('f.always', function () {
  test('retorna uma funcao callback que sempre retorna o valor/referencia passado', function () {
    const x = f.always('rex')

    expect(x).toBeInstanceOf(Function)
    expect(x()).toBe('rex')
  })
})
