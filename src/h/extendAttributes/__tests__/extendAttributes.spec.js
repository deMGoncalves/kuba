import * as f from '@f'
import extendAttributes from '../extendAttributes'

jest.mock('../../../f/always.js')
jest.mock('../../../f/forEach.js')
jest.mock('../../../f/toPairs.js')

describe('extendAttributes', () => {
  beforeEach(() => {
    f.always.mockReset()
    f.forEach.mockReset()
    f.toPairs.mockReset()
  })

  test('Deve retornar o mesmo elemento depois que executar o extendAttributes', () => {
    const attributes = {}
    const element = document.createElement('div')
    const always = () => element

    f.always.mockReturnValue(always)

    expect(extendAttributes(attributes, element)).toEqual(element)

    expect(f.always).toHaveBeenCalled()
    expect(f.always).toHaveBeenCalledTimes(1)
    expect(f.always).toHaveBeenCalledWith(element)
  })

  test('Deve retornar uma colecao de chave e valor de todos os atributos', () => {
    const attributes = { id: 'rex-js' }
    const element = document.createElement('div')
    const always = () => element
    const toPairs = ['id', 'rex-js']

    f.always.mockReturnValue(always)
    f.toPairs.mockReturnValue(toPairs)

    expect(extendAttributes(attributes, element)).toEqual(element)

    expect(f.always).toHaveBeenCalled()
    expect(f.always).toHaveBeenCalledTimes(1)
    expect(f.always).toHaveBeenCalledWith(element)

    expect(f.toPairs).toHaveBeenCalled()
    expect(f.toPairs).toHaveBeenCalledTimes(1)
    expect(f.toPairs).toHaveBeenCalledWith(attributes)
  })
})
