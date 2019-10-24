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

jest.mock('../appendChild.js')
jest.mock('../doNothing.js')
jest.mock('../notHasElement.js')
jest.mock('../notHasElementAndVElement.js')

describe('reflow', () => {
  beforeEach(() => {
    appendChild.mockReset()
    doNothing.mockReset()
    notHasElement.mockReset()
    notHasElementAndVElement.mockReset()
  })

  test('Deve fazer nada quando o element e vElement nao existir', () => {
    const element = undefined
    const vElement = undefined
    const parent = document.createElement('div')

    doNothing.mockReturnValue(null)
    notHasElementAndVElement.mockReturnValue(true)

    expect(reflow(element, vElement, parent)).toBe(null)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(doNothing).toHaveBeenCalled()
    expect(doNothing).toHaveBeenCalledTimes(1)
    expect(doNothing).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve apendar o vElement quando naor tivermos o elemento', () => {
    const element = undefined
    const vElement = document.createElement('div')
    const parent = document.createElement('div')

    appendChild.mockReturnValue(vElement)
    notHasElement.mockReturnValue(true)
    notHasElementAndVElement.mockReturnValue(false)

    expect(reflow(element, vElement, parent)).toBe(vElement)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(appendChild).toHaveBeenCalled()
    expect(appendChild).toHaveBeenCalledTimes(1)
    expect(appendChild).toHaveBeenCalledWith(element, vElement, parent)
  })
})
