import _and from './_and'
import and from './and'
import reduce from '@rex/f/src/reduce'

jest.mock('./_and')
jest.mock('@rex/f/src/reduce')

describe('f.and', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Retorna verdadeiro quando todos os parametros forem truthy', function () {
    _and.mockReturnValue(true)
    reduce.mockReturnValue(true)

    expect(and(true, true, true)).toBeTruthy()

    expect(reduce).toHaveBeenCalled()
    expect(reduce).toHaveBeenCalledTimes(1)
    expect(reduce).toHaveBeenCalledWith([true, true], _and, true)
  })
})
