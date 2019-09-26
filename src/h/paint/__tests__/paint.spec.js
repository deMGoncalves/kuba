import * as f from '@f'
import Rex from './Rex'

describe('paint', () => {
  test('Deve retornar "Claro que NaN" quando acessar a propriedade estatica ehUmCachorro', () => {
    expect(Rex.ehUmCachorro).toBe('Claro que NaN')
  })

  test('Deve retornar verdadeiro quando comparar a instancia com a classe Rex', () => {
    const rex = new Rex()
    expect(f.is(Rex, rex)).toBeTruthy()
  })
})
