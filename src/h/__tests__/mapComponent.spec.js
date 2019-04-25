import mapComponent from '../mapComponent'

test('Retorna um novo array com todos os components mapeado para o seu respectivo template', () => {
  let children = [
    document.createElement('div'),
    () => document.createTextNode('johzao')
  ]

  expect(mapComponent(children)).toEqual([
    document.createElement('div'),
    document.createTextNode('johzao')
  ])
})
