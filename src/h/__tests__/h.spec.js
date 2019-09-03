import flatten from '../../f/flatten.js'
import h from '../h'
import createElement from '../createElement.js'
import executeComponent from '../executeComponent.js'
import isTagName from '../isTagName'

jest.mock('../createElement.js')
jest.mock('../executeComponent.js')
jest.mock('../isTagName.js')
jest.mock('../../f/flatten.js')

test('O modulo de hyperscript deve ser exportado como default', () => {
  expect(h).toBeDefined()
})

test('Deve criar um elemento quando o parametro tagNameOrComponent for uma string', () => {
  const element = document.createElement('div')

  isTagName.mockReset()
  isTagName.mockReturnValue(true)

  createElement.mockReset()
  createElement.mockReturnValue(element)

  flatten.mockReset()
  flatten.mockReturnValue([])

  expect(h('div')).toEqual(element)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith('div', {}, [])

  expect(createElement).toHaveBeenCalled()
  expect(createElement).toHaveBeenCalledTimes(1)
  expect(createElement).toHaveBeenCalledWith('div', {}, [])

  expect(flatten).toHaveBeenCalled()
  expect(flatten).toHaveBeenCalledTimes(1)
  expect(flatten).toHaveBeenCalledWith([])
})

test('Deve retornar o resultado do component quando o parametro tagNameOrComponent for uma funcao', () => {
  const component = () => {}
  const element = document.createElement('div')

  isTagName.mockReset()
  isTagName.mockReturnValue(false)

  executeComponent.mockReset()
  executeComponent.mockReturnValue(element)

  flatten.mockReset()
  flatten.mockReturnValue([])

  expect(h(component)).toEqual(element)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith(component, {}, [])

  expect(executeComponent).toHaveBeenCalled()
  expect(executeComponent).toHaveBeenCalledTimes(1)
  expect(executeComponent).toHaveBeenCalledWith(component, {}, [])

  expect(flatten).toHaveBeenCalled()
  expect(flatten).toHaveBeenCalledTimes(1)
  expect(flatten).toHaveBeenCalledWith([])
})

test('Os atributos do elemento e/ou componente devem ser clonados para evitar a referancia', () => {
  const attributes = {}

  isTagName.mockReset()
  isTagName.mockReturnValue(true)

  createElement.mockReset()
  createElement.mockImplementation((tagName, attrs, children) => {
    expect(tagName).toBe('div')
    expect(attrs).not.toBe(attributes)
    expect(children).toEqual([])
  })

  flatten.mockReset()
  flatten.mockReturnValue([])

  h('div', attributes)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith('div', attributes, [])

  expect(createElement).toHaveBeenCalled()
  expect(createElement).toHaveBeenCalledTimes(1)
  expect(createElement).toHaveBeenCalledWith('div', {}, [])

  expect(flatten).toHaveBeenCalled()
  expect(flatten).toHaveBeenCalledTimes(1)
  expect(flatten).toHaveBeenCalledWith([])
})

test('Os elementos filhos serao passado como spread e devem ser achatados em um unico array', () => {
  isTagName.mockReset()
  isTagName.mockReturnValue(true)

  createElement.mockReset()
  createElement.mockImplementation((tagName, attrs, children) => {
    expect(tagName).toBe('div')
    expect(attrs).toEqual({})
    expect(children).toEqual([1, 2, 3, 4])
  })

  flatten.mockReset()
  flatten.mockReturnValue([1, 2, 3, 4])

  h('div', {}, 1, [2, 3], 4)

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith('div', {}, [1, 2, 3, 4])

  expect(createElement).toHaveBeenCalled()
  expect(createElement).toHaveBeenCalledTimes(1)
  expect(createElement).toHaveBeenCalledWith('div', {}, [1, 2, 3, 4])

  expect(flatten).toHaveBeenCalled()
  expect(flatten).toHaveBeenCalledTimes(1)
  expect(flatten).toHaveBeenCalledWith([1, [2, 3], 4])
})
