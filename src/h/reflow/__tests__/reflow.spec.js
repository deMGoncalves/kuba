import * as f from '@f'
import appendChild from '../appendChild'
import elementsAreDifferent from '../elementsAreDifferent'
import elementsIsTextNode from '../elementsIsTextNode'
import doNothing from '../doNothing'
import notHasElement from '../notHasElement'
import notHasElementAndVElement from '../notHasElementAndVElement'
import notHasVElement from '../notHasVElement'
import otherObject from '../otherObject'
import reflow from '../reflow'
import remove from '../remove'
import replaceChild from '../replaceChild'
import replaceComponent from '../replaceComponent'
import replaceElement from '../replaceElement'
import sameObject from '../sameObject'
import setTextContent from '../setTextContent'

jest.mock('../doNothing.js')
jest.mock('../notHasElementAndVElement.js')

describe('reflow', () => {
  beforeEach(() => {
    doNothing.mockReset()
    notHasElementAndVElement.mockReset()
  })

  test('Deve fazer nada quando o element e vElement nao existir', () => {
    const element = undefined
    const vElement = undefined

    doNothing.mockReturnValue(null)
    notHasElementAndVElement.mockReturnValue(true)

    expect(reflow(element, vElement)).toBe(null)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement)

    expect(doNothing).toHaveBeenCalled()
    expect(doNothing).toHaveBeenCalledTimes(1)
    expect(doNothing).toHaveBeenCalledWith(element, vElement)
  })
})
