import Component from '../component'
import Element from '../element'
import h from '../h'

describe('standard.h', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Cria um elemento quando o nodeName for uma string', () => {
    const create = jest.spyOn(Element, 'create')
    const is = jest.spyOn(Element, 'is')
    const nodeName = 'h1'

    h(nodeName, {})

    expect(is).toHaveBeenCalledTimes(1)
    expect(is).toHaveBeenCalledWith(nodeName)
    expect(create).toHaveBeenCalledTimes(1)
    expect(create).toHaveBeenCalledWith(nodeName, {}, [])
  })

  test('Executa o nodeName quando for uma funcao', () => {
    const execute = jest.spyOn(Component, 'execute')
    const is = jest.spyOn(Component, 'is')
    const nodeName = () => (undefined)

    h(nodeName, {})

    expect(is).toHaveBeenCalledTimes(1)
    expect(is).toHaveBeenCalledWith(nodeName)
    expect(execute).toHaveBeenCalledTimes(1)
    expect(execute).toHaveBeenCalledWith(nodeName, {}, [])
  })
})
