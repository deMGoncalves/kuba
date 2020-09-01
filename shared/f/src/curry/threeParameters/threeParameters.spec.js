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

  test('devolve a funcao twoParameters quando o primeiro parametro for __ e o segundo nao', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    twoParameters.mockImplementation(() => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, '.'))

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(2)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve a funcao twoParameters quando o segundo parametro for __ e o primeiro nao', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    twoParameters.mockImplementation(() => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', __))

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(3)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve a funcao oneParameter quando os dois primeiro parametros forem direrente de __', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)

    oneParameter.mockImplementation(() => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', '.'))

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(3)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('.')

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)

    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('devolve uma funcao callback quando os tres parametros forem __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, __, __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(3)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('devolve twoParameters quando apenas os dois primeiros parametros forem __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    twoParameters.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, __, 'js')).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(5)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve twoParameters quando apenas o primeiro e o ultimo parametro for __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    twoParameters.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, '.', __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(6)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve twoParameters quando quando os dois ultimos parametros forem __', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)

    twoParameters.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', __, __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(5)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)

    expect(oneParameter).not.toHaveBeenCalled()
  })

  test('devolve oneParameter quando apenas o primeiro parametro for __', function () {
    isGap
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    oneParameter.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y(__, '.', 'js')).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(9)
    expect(isGap).toHaveBeenCalledWith(__)
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)

    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('devolve oneParameter quando apenas o segundo parametro for __', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    oneParameter.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', __, 'js')).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(7)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)

    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('devolve oneParameter quando apenas o terceiro parametro for __', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)

    oneParameter.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', '.', __)).toBeInstanceOf(Function)

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(7)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith(__)

    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)

    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('executa a funcao alvo quando todos os parametros forem validos', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)

    oneParameter.mockImplementation(() => () => null)

    const x = (a, b, c) => a + b + c
    const y = threeParameters(x)

    expect(y('rex', '.', 'js')).toBe('rex.js')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(7)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('js')

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
  })

  test('passa todos os parametros para a funcao alvo, mais os adicionais', function () {
    isGap
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)

    oneParameter.mockImplementation(() => () => null)

    const x = function (_a, _b, _c) { return [].join.call(arguments, '') }
    const y = threeParameters(x)

    expect(y('rex', '.', 'js', ' :D')).toBe('rex.js :D')

    expect(isGap).toHaveBeenCalled()
    expect(isGap).toHaveBeenCalledTimes(7)
    expect(isGap).toHaveBeenCalledWith('rex')
    expect(isGap).toHaveBeenLastCalledWith('js')

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
  })
})
