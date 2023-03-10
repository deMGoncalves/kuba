import Component from '../component'

describe('standard.h.component', () => {
  let nodeName

  beforeEach(() => {
    nodeName = jest.fn()
  })

  test('Retorna truthy quando o nodeName for uma function', () => {
    expect(Component.is(nodeName)).toBeTruthy()
  })

  test('Executa o nodeNme passando o attrs e children como parametros', () => {
    Component.execute(nodeName, {}, [])

    expect(nodeName).toHaveBeenCalledTimes(1)
    expect(nodeName).toHaveBeenCalledWith({}, [])
  })
})
