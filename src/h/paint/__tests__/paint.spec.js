import onObject from '../onObject'
import onComponent from '../onComponent'
import component from './component'
import Rex from './Rex'

jest.mock('../onObject.js')
jest.mock('../onComponent.js')

describe('paint', () => {
  beforeEach(() => {
    onObject.mockReset()
    onComponent.mockReset()
  })

  test('Deve retornar "Rex.JS" quando acessar a propriedade nome', () => {
    expect(Rex.nome).toBe('Rex.JS')
  })

  test('Deve retornar o erro "Nao pode alterar o nome para Lupy.JS" quando alterar a propriedade nome', () => {
    const expression = () => (Rex.nome = 'Lupy.JS')
    const error = new Error('Nao pode alterar o nome para Lupy.JS')
    expect(expression).toThrowError(error)
  })

  test('Deve cantar NaNNaNNaNNaNNaN Batman! quando executar o metodo cante', () => {
    expect(Rex.cante()).toBe('NaNNaNNaNNaNNaN Batman!')
  })

  test('Deve retornar a instancia de Rex quando executar a instrucao com o operador new', () => {
    onObject.mockReturnValue({})

    expect(new Rex()).toEqual({})

    expect(onObject).toHaveBeenCalled()
    expect(onObject).toHaveBeenCalledTimes(1)
    expect(onObject).toHaveBeenCalledWith({}, component)
  })
})
