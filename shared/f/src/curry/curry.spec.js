import curry from './curry'
import zeroParameter from './zeroParameter'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import threeParameters from './threeParameters'
import throwParameters from './throwParameters'

jest.mock('./zeroParameter')
jest.mock('./oneParameter')
jest.mock('./twoParameters')
jest.mock('./threeParameters')
jest.mock('./throwParameters')

describe('f.curry', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('executa o zeroParameter quando a funcao alvo tiver nenhum parametro', function () {
    zeroParameter.mockImplementation((target) => function () { return target(...arguments) })

    const x = () => undefined
    const y = curry(x)

    expect(y()).toBeUndefined()
    expect(zeroParameter).toHaveBeenCalled()
    expect(zeroParameter).toHaveBeenCalledTimes(1)
    expect(zeroParameter).toHaveBeenCalledWith(x)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
    expect(threeParameters).not.toHaveBeenCalled()
    expect(throwParameters).not.toHaveBeenCalled()
  })

  test('executa o oneParameter quando a funcao alvo tiver um parametro', function () {
    oneParameter.mockImplementation((target) => function (_a) { return target(...arguments) })

    const x = (a) => a
    const y = curry(x)

    expect(y('rex')).toBe('rex')
    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)
    expect(oneParameter).toHaveBeenCalledWith(x)

    expect(twoParameters).not.toHaveBeenCalled()
    expect(threeParameters).not.toHaveBeenCalled()
    expect(throwParameters).not.toHaveBeenCalled()
  })

  test('executa o twoParameters quando a funcao alvo tiver dois parametros', function () {
    twoParameters.mockImplementation((target) => function (_a, _b) { return target(...arguments) })

    const x = (a, b) => a + b
    const y = curry(x)

    expect(y('rex', '.js')).toBe('rex.js')
    expect(twoParameters).toHaveBeenCalled()
    expect(twoParameters).toHaveBeenCalledTimes(1)
    expect(twoParameters).toHaveBeenCalledWith(x)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(threeParameters).not.toHaveBeenCalled()
    expect(throwParameters).not.toHaveBeenCalled()
  })

  test('executa o threeParameters quando a funcao alvo tiver tres parametros', function () {
    threeParameters.mockImplementation((target) => function (_a, _b, _c) { return target(...arguments) })

    const x = (a, b, c) => a + b + c
    const y = curry(x)

    expect(y('rex', '.', 'js')).toBe('rex.js')
    expect(threeParameters).toHaveBeenCalled()
    expect(threeParameters).toHaveBeenCalledTimes(1)
    expect(threeParameters).toHaveBeenCalledWith(x)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
    expect(throwParameters).not.toHaveBeenCalled()
  })

  test('executa o throwParameters quando a funcao alvo tiver mais de tres parametros', function () {
    throwParameters.mockImplementation(() => {
      throw new Error('A quantidade de argumentos deve ser um número inteiro não negativo e não superior a três')
    })

    const x = (_a, _b, _c, _d) => undefined

    expect(() => curry(x)).toThrow()
    expect(throwParameters).toHaveBeenCalled()
    expect(throwParameters).toHaveBeenCalledTimes(1)
    expect(throwParameters).toHaveBeenCalledWith(x)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(twoParameters).not.toHaveBeenCalled()
    expect(threeParameters).not.toHaveBeenCalled()
  })
})
