import paint from '../paint'

describe('paint', () => {
  const component = (rex) =>
    <h1>{rex.nome}</h1>

  @paint(component)
  class Rex {
    static get ehUmCachorro () {
      return 'Claro que NaN'
    }
  }

  test('Deve retornar "Claro que NaN" quando acessar a propriedade estatica ehUmCachorro', () => {
    expect(Rex.ehUmCachorro).toBe('Claro que NaN')
  })
})
