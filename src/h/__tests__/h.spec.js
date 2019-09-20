import flatten from '../../f/flatten.js'
import T from '../../f/T.js'
import h from '../h'
import createElement from '../createElement.js'
import createComment from '../createComment.js'
import executeComponent from '../executeComponent.js'
import isComponent from '../isComponent.js'
import isTagName from '../isTagName'

jest.mock('../createElement.js')
jest.mock('../createComment.js')
jest.mock('../executeComponent.js')
jest.mock('../isComponent.js')
jest.mock('../isTagName.js')
jest.mock('../../f/flatten.js')
jest.mock('../../f/T.js')

describe('h', () => {
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

    isComponent.mockReset()
    isComponent.mockReturnValue(true)

    executeComponent.mockReset()
    executeComponent.mockReturnValue(element)

    flatten.mockReset()
    flatten.mockReturnValue([])

    expect(h(component)).toEqual(element)

    expect(isTagName).toHaveBeenCalled()
    expect(isTagName).toHaveBeenCalledTimes(1)
    expect(isTagName).toHaveBeenCalledWith(component, {}, [])

    expect(isComponent).toHaveBeenCalled()
    expect(isComponent).toHaveBeenCalledTimes(1)
    expect(isComponent).toHaveBeenCalledWith(component, {}, [])

    expect(executeComponent).toHaveBeenCalled()
    expect(executeComponent).toHaveBeenCalledTimes(1)
    expect(executeComponent).toHaveBeenCalledWith(component, {}, [])

    expect(flatten).toHaveBeenCalled()
    expect(flatten).toHaveBeenCalledTimes(1)
    expect(flatten).toHaveBeenCalledWith([])
  })

  test('Deve retornar um comentario quando o parametro tagNameOrComponent for diferente de um literal ou uma funcao', () => {
    const comment = document.createComment('')

    isTagName.mockReset()
    isTagName.mockReturnValue(false)

    isComponent.mockReset()
    isComponent.mockReturnValue(false)

    T.mockReset()
    T.mockReturnValue(true)

    createComment.mockReset()
    createComment.mockReturnValue(comment)

    flatten.mockReset()
    flatten.mockReturnValue([])

    expect(h(null)).toEqual(comment)

    expect(isTagName).toHaveBeenCalled()
    expect(isTagName).toHaveBeenCalledTimes(1)
    expect(isTagName).toHaveBeenCalledWith(null, {}, [])

    expect(isComponent).toHaveBeenCalled()
    expect(isComponent).toHaveBeenCalledTimes(1)
    expect(isComponent).toHaveBeenCalledWith(null, {}, [])

    expect(T).toHaveBeenCalled()
    expect(T).toHaveBeenCalledTimes(2)
    expect(T).toHaveBeenCalledWith(null, {}, [])

    expect(createComment).toHaveBeenCalled()
    expect(createComment).toHaveBeenCalledTimes(1)
    expect(createComment).toHaveBeenCalledWith(null, {}, [])

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
})
