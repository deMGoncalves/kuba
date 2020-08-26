import oneParameter from './oneParameter'
import __, { isGap } from '@rex/f/src/gap'

jest.mock('@rex/f/src/gap')

describe('f.curry.oneParameter', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('retorna uma funcao callback quando nao passar nenhum parametro', function () {
    const x = (a) => a
    const y = oneParameter(x)

    expect(y()).toBeInstanceOf(Function)
  })

  test('retorna uma funcao callback quando o parametro for um __', function () {
    isGap.mockReturnValue(true)

    const x = (a) => a
    const y = oneParameter(x)

    expect(y(__)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith(__)
  })

  test('retorna a saida da execucao da funcao alvo quando o parametro for diferente do __', function () {
    isGap.mockReturnValue(false)

    const x = (a) => a
    const y = oneParameter(x)

    expect(y('rex')).toBe('rex')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith('rex')
  })

  test('executa a funcao alvo com todos os parametros que for passado para a funcao callback', function () {
    isGap.mockReturnValue(false)

    const x = (a, b) => a + b
    const y = oneParameter(x)

    expect(y('rex', '.js')).toBe('rex.js')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith('rex')
  })
})
