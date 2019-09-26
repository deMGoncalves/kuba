import Rex from './Rex'

describe('paint', () => {
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
})
