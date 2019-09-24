import paint from '../paint'

describe('paint', () => {
  const __nome = Symbol('nome')
  const component = () => (null)

  @paint(component)
  class Rex {
    static get ehUmCachorro () {
      return 'Claro que NaN'
    }

    static get nome () {
      return `Meu nome eh ${Rex[__nome]}`
    }

    static set nome (novoNome) {
      Rex[__nome] = novoNome
      return Rex
    }
  }

  test('Deve retornar "Claro que NaN" quando acessar a propriedade estatica ehUmCachorro', () => {
    expect(Rex.ehUmCachorro).toBe('Claro que NaN')
  })

  test('Deve retornar "Meu nome eh Rex.JS" quando acessar a propriedade nome depois alterar o nome', () => {
    Rex.nome = 'Rex.JS'
    expect(Rex.nome).toBe('Meu nome eh Rex.JS')
  })
})
