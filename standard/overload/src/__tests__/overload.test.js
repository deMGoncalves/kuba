import overload from '../overload'

class Sparring {
  @overload(
    'methodX',
    'methodY',
    'methodZ'
  )
  method () {
    return 333
  }
}

describe('standard.overload', () => {
  let method
  let sparring

  beforeEach(() => {
    method = jest.spyOn(Sparring.prototype, 'method')
    sparring = new Sparring()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Executa o metodo A quando os metodos apendados (X, Y e Z) forem executados', () => {
    sparring.methodX()
    sparring.methodY()
    sparring.methodZ()
    sparring.method()

    expect(method).toHaveBeenCalledTimes(4)
  })

  test('Parametros dos metodos (X, Y e Z) sera o mesmo para o metodo A', () => {
    sparring.methodX(1, 2, 3)

    expect(method).toHaveBeenCalledTimes(1)
    expect(method).toHaveBeenCalledWith(1, 2, 3)
  })

  test('Retorno do metodo A sera o mesmo dos metodo (X, Y e Z)', () => {
    const output = sparring.method()

    expect(sparring.methodX()).toBe(output)
    expect(sparring.methodY()).toBe(output)
    expect(sparring.methodZ()).toBe(output)
  })
})
