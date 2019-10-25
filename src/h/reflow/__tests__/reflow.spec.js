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

jest.mock('../../../f/T.js')
jest.mock('../appendChild.js')
jest.mock('../doNothing.js')
jest.mock('../elementsAreDifferent.js')
jest.mock('../elementsIsTextNode.js')
jest.mock('../notHasElement.js')
jest.mock('../notHasElementAndVElement.js')
jest.mock('../notHasVElement.js')
jest.mock('../otherObject.js')
jest.mock('../remove.js')
jest.mock('../replaceChild.js')
jest.mock('../replaceComponent.js')
jest.mock('../replaceElement.js')
jest.mock('../sameObject.js')
jest.mock('../setTextContent.js')

describe('reflow', () => {
  beforeEach(() => {
    f.T.mockReset()
    appendChild.mockReset()
    doNothing.mockReset()
    elementsAreDifferent.mockReset()
    elementsIsTextNode.mockReset()
    notHasElement.mockReset()
    notHasElementAndVElement.mockReset()
    notHasVElement.mockReset()
    otherObject.mockReset()
    remove.mockReset()
    replaceChild.mockReset()
    replaceComponent.mockReset()
    replaceElement.mockReset()
    sameObject.mockReset()
    setTextContent.mockReset()
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

  test('Deve remover o elemento quando o vElemento nao existir mais', () => {
    const element = document.createElement('div')
    const vElement = undefined
    const parent = document.createElement('div')

    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(true)
    remove.mockReturnValue(undefined)

    expect(reflow(element, vElement, parent)).toBeUndefined()

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(remove).toHaveBeenCalled()
    expect(remove).toHaveBeenCalledTimes(1)
    expect(remove).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve alterar o texto do elemento quando os elementos forem do tipo TextNode', () => {
    const element = document.createTextNode('')
    const vElement = document.createTextNode('Rex.JS')
    const parent = document.createElement('h1')

    elementsIsTextNode.mockReturnValue(true)
    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(false)
    setTextContent.mockReturnValue('Rex.JS')

    expect(reflow(element, vElement, parent)).toBe('Rex.JS')

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsIsTextNode).toHaveBeenCalled()
    expect(elementsIsTextNode).toHaveBeenCalledTimes(1)
    expect(elementsIsTextNode).toHaveBeenCalledWith(element, vElement, parent)

    expect(setTextContent).toHaveBeenCalled()
    expect(setTextContent).toHaveBeenCalledTimes(1)
    expect(setTextContent).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve trocar o vElement pelo elemento quando os elementos forem diferentes', () => {
    const element = document.createElement('p')
    const vElement = document.createElement('h1')
    const parent = document.createElement('div')

    elementsAreDifferent.mockReturnValue(true)
    elementsIsTextNode.mockReturnValue(false)
    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(false)
    replaceChild.mockReturnValue(vElement)

    expect(reflow(element, vElement, parent)).toBe(vElement)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsIsTextNode).toHaveBeenCalled()
    expect(elementsIsTextNode).toHaveBeenCalledTimes(1)
    expect(elementsIsTextNode).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsAreDifferent).toHaveBeenCalled()
    expect(elementsAreDifferent).toHaveBeenCalledTimes(1)
    expect(elementsAreDifferent).toHaveBeenCalledWith(element, vElement, parent)

    expect(replaceChild).toHaveBeenCalled()
    expect(replaceChild).toHaveBeenCalledTimes(1)
    expect(replaceChild).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve fazer nada quando os elementos tivem a mesma instancia de classe', () => {
    const element = document.createElement('div')
    const vElement = document.createElement('div')
    const parent = document.createElement('div')

    doNothing.mockReturnValue(undefined)
    elementsAreDifferent.mockReturnValue(false)
    elementsIsTextNode.mockReturnValue(false)
    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(false)
    sameObject.mockReturnValue(true)

    expect(reflow(element, vElement, parent)).toBeUndefined()

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsIsTextNode).toHaveBeenCalled()
    expect(elementsIsTextNode).toHaveBeenCalledTimes(1)
    expect(elementsIsTextNode).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsAreDifferent).toHaveBeenCalled()
    expect(elementsAreDifferent).toHaveBeenCalledTimes(1)
    expect(elementsAreDifferent).toHaveBeenCalledWith(element, vElement, parent)

    expect(sameObject).toHaveBeenCalled()
    expect(sameObject).toHaveBeenCalledTimes(1)
    expect(sameObject).toHaveBeenCalledWith(element, vElement, parent)

    expect(doNothing).toHaveBeenCalled()
    expect(doNothing).toHaveBeenCalledTimes(1)
    expect(doNothing).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve trocar o vElemento pelo element quando os lementos tivem instancia de classe diferente', () => {
    const element = document.createElement('div')
    const vElement = document.createElement('div')
    const parent = document.createElement('div')

    elementsAreDifferent.mockReturnValue(false)
    elementsIsTextNode.mockReturnValue(false)
    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(false)
    otherObject.mockReturnValue(true)
    replaceComponent.mockReturnValue(vElement)

    expect(reflow(element, vElement, parent)).toBe(vElement)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsIsTextNode).toHaveBeenCalled()
    expect(elementsIsTextNode).toHaveBeenCalledTimes(1)
    expect(elementsIsTextNode).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsAreDifferent).toHaveBeenCalled()
    expect(elementsAreDifferent).toHaveBeenCalledTimes(1)
    expect(elementsAreDifferent).toHaveBeenCalledWith(element, vElement, parent)

    expect(sameObject).toHaveBeenCalled()
    expect(sameObject).toHaveBeenCalledTimes(1)
    expect(sameObject).toHaveBeenCalledWith(element, vElement, parent)

    expect(otherObject).toHaveBeenCalled()
    expect(otherObject).toHaveBeenCalledTimes(1)
    expect(otherObject).toHaveBeenCalledWith(element, vElement, parent)

    expect(replaceComponent).toHaveBeenCalled()
    expect(replaceComponent).toHaveBeenCalledTimes(1)
    expect(replaceComponent).toHaveBeenCalledWith(element, vElement, parent)
  })

  test('Deve trocar o vElemento pelo element como processo de fallback do reflow', () => {
    const element = document.createElement('div')
    const vElement = document.createElement('div')
    const parent = document.createElement('div')

    f.T.mockReturnValue(true)
    elementsAreDifferent.mockReturnValue(false)
    elementsIsTextNode.mockReturnValue(false)
    notHasElement.mockReturnValue(false)
    notHasElementAndVElement.mockReturnValue(false)
    notHasVElement.mockReturnValue(false)
    otherObject.mockReturnValue(false)
    replaceElement.mockReturnValue(vElement)

    expect(reflow(element, vElement, parent)).toBe(vElement)

    expect(notHasElementAndVElement).toHaveBeenCalled()
    expect(notHasElementAndVElement).toHaveBeenCalledTimes(1)
    expect(notHasElementAndVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasElement).toHaveBeenCalled()
    expect(notHasElement).toHaveBeenCalledTimes(1)
    expect(notHasElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(notHasVElement).toHaveBeenCalled()
    expect(notHasVElement).toHaveBeenCalledTimes(1)
    expect(notHasVElement).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsIsTextNode).toHaveBeenCalled()
    expect(elementsIsTextNode).toHaveBeenCalledTimes(1)
    expect(elementsIsTextNode).toHaveBeenCalledWith(element, vElement, parent)

    expect(elementsAreDifferent).toHaveBeenCalled()
    expect(elementsAreDifferent).toHaveBeenCalledTimes(1)
    expect(elementsAreDifferent).toHaveBeenCalledWith(element, vElement, parent)

    expect(sameObject).toHaveBeenCalled()
    expect(sameObject).toHaveBeenCalledTimes(1)
    expect(sameObject).toHaveBeenCalledWith(element, vElement, parent)

    expect(otherObject).toHaveBeenCalled()
    expect(otherObject).toHaveBeenCalledTimes(1)
    expect(otherObject).toHaveBeenCalledWith(element, vElement, parent)

    expect(f.T).toHaveBeenCalled()
    expect(f.T).toHaveBeenCalledTimes(2)
    expect(f.T).toHaveBeenCalledWith(element, vElement, parent)

    expect(replaceElement).toHaveBeenCalled()
    expect(replaceElement).toHaveBeenCalledTimes(1)
    expect(replaceElement).toHaveBeenCalledWith(element, vElement, parent)
  })
})
