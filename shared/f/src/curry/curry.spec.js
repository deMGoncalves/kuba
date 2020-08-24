import * as f from '@rex/f'
import oneParameter from './oneParameter'

jest.mock('./oneParameter')

describe('f.curry', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('executa o oneParameter quando a funcao alvo tiver um parametro', function () {
    oneParameter.mockImplementation((target) => (a) => target(a))

    const x = (a) => a
    const y = f.curry(x)

    expect(y('rex')).toBe('rex')
    expect(oneParameter).toHaveBeenCalled()
    expect(oneParameter).toHaveBeenCalledTimes(1)
    expect(oneParameter).toHaveBeenCalledWith(x)
  })
})
