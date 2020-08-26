import oneParameter from '@rex/f/src/curry/oneParameter'
import twoParameters from './twoParameters'
import { isGap } from '@rex/f/src/gap'

jest.mock('@rex/f/src/curry/oneParameter')
jest.mock('@rex/f/src/gap')

describe('f.curry.twoParameters', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('devolve uma funcao callback quando quando nao passar nenhum parametro', function () {
    const x = () => null
    const y = twoParameters(x)

    expect(y).toBeInstanceOf(Function)

    expect(oneParameter).not.toHaveBeenCalled()
    expect(isGap).not.toHaveBeenCalled()
  })
})
