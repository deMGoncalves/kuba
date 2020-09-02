import magic from './magic'
import or from '@rex/f/src/or'
import symbol from './symbol'

jest.mock('@rex/f/src/or')
jest.mock('./symbol')

describe('f.magic', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('retorna um simbolo para a key fornecido', function () {
    const rex = Symbol('f/rex')

    or.mockReturnValue(rex)
    symbol.mockReturnValue(rex)

    expect(magic('f/rex')).toEqual(rex)

    expect(or).toHaveBeenCalled()
    expect(or).toHaveBeenCalledTimes(1)
    expect(or).toHaveBeenCalledWith(undefined, rex)

    expect(symbol).toHaveBeenCalled()
    expect(symbol).toHaveBeenCalledTimes(1)
    expect(symbol).toHaveBeenCalledWith('f/rex')
  })
})
