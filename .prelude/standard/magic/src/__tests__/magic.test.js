import magic from '../magic'

describe('standard.magic', () => {
  let dunder
  let symbol

  beforeEach(() => {
    symbol = jest.spyOn(window, 'Symbol')
    dunder = magic.method
  })

  test('Cria um simbolo usando o key como identificador', () => {
    expect(symbol).toHaveBeenCalledTimes(1)
    expect(symbol).toHaveBeenCalledWith('method')
  })

  test('Retorna a mesma referencia uma vez que o simbolo tenha cido criado', () => {
    expect(dunder).toBe(magic.method)
  })
})
