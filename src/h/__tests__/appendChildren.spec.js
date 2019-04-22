import h from '../'
import appendChildren from '../appendChildren'

test('Retorna o elemento com seus filhos apendado quando executar a funcao passando um array de filhos', () => {
  let element = document.createElement('div')
  const children = [
    'Hello'
  ]

  expect(appendChildren(children, element)).toEqual(<div>Hello</div>)
})
