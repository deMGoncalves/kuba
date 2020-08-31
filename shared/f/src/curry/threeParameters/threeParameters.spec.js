import oneParameter from '@rex/f/src/curry/oneParameter'
import twoParameters from '@rex/f/src/curry/twoParameters'
import threeParameters from './threeParameters'
import __, { isGap } from '@rex/f/src/gap'

jest.mock('@rex/f/src/curry/oneParameter')
jest.mock('@rex/f/src/curry/twoParameters')
jest.mock('@rex/f/src/gap')

describe('f.curry.threeParameters', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('devolve uma funcao callback quando quando nao passar nenhum parametro', function () {
    const x = () => null
    const y = threeParameters(x)

    expect(y()).toBeInstanceOf(Function)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
    expect(isGap).not.toHaveBeenCalled()
  })

  test('devolve uma funcao callback quando o primeiro parametro for um __', function () {
    isGap.mockReturnValue(true)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith(__)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('devolve twoParameters quando passado apenas o primeiro parametro', function () {
    isGap.mockReturnValue(false)
    twoParameters.mockReturnValue(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve uma funcao callback quando os dois primeiros parametros forem __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(2)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).not.toHaveBeenCalled()
    expect(oneParameter).not.toHaveBeenCalled()
  })
})
