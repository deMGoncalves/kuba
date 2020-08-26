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
})
