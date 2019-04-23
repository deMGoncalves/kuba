import h from '../'
import setAttribute from '../setAttribute'

test('Retorna o elemento com atributo adicionado quando executado a funcao', () => {
  let element = document.createElement('div')
  expect(setAttribute(element, 'id', 'johzao')).toEqual(<div id='johzao' />)
})
