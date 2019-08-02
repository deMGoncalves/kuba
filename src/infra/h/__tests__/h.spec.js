import h from '../'
import createElement from '../createElement.js'
import executeComponent from '../executeComponent.js'
import isTagName from '../isTagName'

jest.mock('../createElement.js')
jest.mock('../executeComponent.js')
jest.mock('../isTagName.js')

test('h', () => {
  expect(h).toBeDefined()
})

test('Deve criar um elemento quando o parametro tagNameOrComponent for uma string', () => {
  const element = document.createElement('div')

  isTagName.mockReset()
  isTagName.mockReturnValue(true)

  createElement.mockReset()
  createElement.mockReturnValue(element)

  expect(h('div')).toEqual(element)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith('div')

  expect(createElement).toHaveBeenCalled()
  expect(createElement).toHaveBeenCalledTimes(1)
  expect(createElement).toHaveBeenCalledWith('div', {}, [])
})

test('Deve retornar o resultado do component quando o parametro tagNameOrComponent for uma funcao', () => {
  const component = () => {}
  const element = document.createElement('div')

  isTagName.mockReset()
  isTagName.mockReturnValue(false)

  executeComponent.mockReset()
  executeComponent.mockReturnValue(element)

  expect(h(component)).toEqual(element)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith(component)

  expect(executeComponent).toHaveBeenCalled()
  expect(executeComponent).toHaveBeenCalledTimes(1)
  expect(executeComponent).toHaveBeenCalledWith(component, {}, [])
})
