import oneParameter from '@rex/f/src/curry/oneParameter'
import twoParameters from '@rex/f/src/curry/twoParameters'
import threeParameters from './threeParameters'
import { isGap } from '@rex/f/src/gap'

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
})
