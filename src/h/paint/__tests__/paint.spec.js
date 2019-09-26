import Rex from './Rex'

describe('paint', () => {
  test('Deve retornar "Rex.JS" quando acessar a propriedade nome', () => {
    expect(Rex.nome).toBe('Rex.JS')
  })
})
