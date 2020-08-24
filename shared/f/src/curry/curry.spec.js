import curry from './curry'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'

jest.mock('./oneParameter')
jest.mock('./twoParameters')

describe('f.curry', function () {
  beforeEach(function () {
    jest.clearAllMocks()
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
  })
})
