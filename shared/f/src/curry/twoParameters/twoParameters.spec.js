import oneParameter from '@rex/f/src/curry/oneParameter'
import twoParameters from './twoParameters'
import __, { isGap } from '@rex/f/src/gap'

jest.mock('@rex/f/src/curry/oneParameter')
jest.mock('@rex/f/src/gap')

describe('f.curry.twoParameters', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('devolve uma funcao callback quando quando nao passar nenhum parametro', function () {
    const x = () => null
    const y = twoParameters(x)

    expect(y()).toBeInstanceOf(Function)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(isGap).not.toHaveBeenCalled()
  })

  test('devolve uma funcao callback quando o primeiro parametro for um __', function () {
    isGap.mockReturnValue(true)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y(__)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith(__)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve oneParameter quando passado apenas o primeiro parametro', function () {
    isGap.mockReturnValue(false)
    oneParameter.mockReturnValue(() => () => null)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y(__)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(1)
    expect(isGap).toHaveBeenCalledWith(__)

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)
  })

  test('devolve uma funcao callback quando os dois parametros forem __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y(__, __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(2)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve oneParameter quando o primeiro parametro for um __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    oneParameter.mockReturnValue(() => () => null)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y(__, '.js')).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(3)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)
  })

  test('devolve oneParameter quando o segundo parametro for um __', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)

    oneParameter.mockReturnValue(() => () => null)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y('rex', __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(2)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('rex')

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)
  })

  test('executa a funcao alvo quando todos os parametros forem passado', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)

    const x = (a, b) => a + b
    const y = twoParameters(x)

    expect(y('rex', '.js')).toBe('rex.js')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(4)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('.js')

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('executa a funcao alvo quando todos os parametros forem passado, mais os adicionais', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)

    const x = function (_a, _b) { return [].join.call(arguments, '') }
    const y = twoParameters(x)

    expect(y('rex', '.', 'js')).toBe('rex.js')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(3)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('.')

    expect(oneParameter).not.toHaveBeenCalled()
  })
})
