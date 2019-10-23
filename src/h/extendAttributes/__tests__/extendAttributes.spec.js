import * as f from '@f'
import extendAttributes from '../extendAttributes'

jest.mock('../../../f/always.js')

describe('extendAttributes', () => {
  beforeEach(() => {
    f.always.mockReset()
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
})
