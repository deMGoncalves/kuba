import oneParameter from './oneParameter'

test('retorna uma funcao callback quando nao passar nenhum parametro', function () {
  const x = (a) => a
  const y = oneParameter(x)

  expect(y()).toBeInstanceOf(Function)
})
