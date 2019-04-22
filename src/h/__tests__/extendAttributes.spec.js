import h from '../'
import extendAttributes from '../extendAttributes'

test('Retora o elemento com os atributos adicionado quando executar a funcao passando um elemento e um objeto de atributos', () => {
  let element = document.createElement('div')
  const attributes = { id: 'johzao' }

  expect(extendAttributes(attributes, element)).toEqual(<div id='johzao' />)
})
