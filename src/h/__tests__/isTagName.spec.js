import isTagName from '../isTagName'

test('Retorna verdadeiro quando executar a funcao passando uma string no parametro tagNameOrComponent', () => {
  expect(isTagName('div')).toBeTruthy()
})

test('Retorna falso quando executar a funcao passando qualquer objeto que nao seja uma string no parametro tagNameOrComponent', () => {
  expect(isTagName(() => {})).toBeFalsy()
})
