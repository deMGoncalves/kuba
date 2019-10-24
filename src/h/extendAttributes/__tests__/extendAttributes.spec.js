import * as f from '@f'
import extendAttributes from '../extendAttributes'
import resolveExtend from '../resolveExtend'

jest.mock('../../../f/always.js')
jest.mock('../../../f/forEach.js')
jest.mock('../../../f/toPairs.js')
jest.mock('../resolveExtend.js')

describe('extendAttributes', () => {
  beforeEach(() => {
    f.always.mockReset()
    f.forEach.mockReset()
    f.toPairs.mockReset()
    resolveExtend.mockReset()
  })

  test('Deve retornar o mesmo elemento depois que executar o extendAttributes', () => {
    const element = document.createElement('div')

    f.always.mockReturnValue(() => element)

    expect(extendAttributes({}, element)).toEqual(element)

    expect(f.always).toHaveBeenCalled()
    expect(f.always).toHaveBeenCalledTimes(1)
    expect(f.always).toHaveBeenCalledWith(element)
  })

  test('Deve executar o resolveExtend para cada par de key e values dos atributos que seram adicionado ao elemento', () => {
    const attributes = { id: 'rex-js' }
    const element = document.createElement('div')

    f.always.mockReturnValue(() => element)

    expect(extendAttributes(attributes, element)).toEqual(element)

    expect(f.always).toHaveBeenCalled()
    expect(f.always).toHaveBeenCalledTimes(1)
    expect(f.always).toHaveBeenCalledWith(element)

    expect(f.toPairs).toHaveBeenCalled()
    expect(f.toPairs).toHaveBeenCalledTimes(1)
    expect(f.toPairs).toHaveBeenCalledWith(attributes)

    expect(resolveExtend).toHaveBeenCalled()
    expect(resolveExtend).toHaveBeenCalledTimes(1)
    expect(resolveExtend).toHaveBeenCalledWith(element)
  })
})
