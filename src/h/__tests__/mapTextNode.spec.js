import mapTextNode from '../mapTextNode'

test('Retorna um novo array com todos os textos mapeado para o TextNode', () => {
  let children = [
    document.createElement('div'),
    'johzao'
  ]

  expect(mapTextNode(children)).toEqual([
    document.createElement('div'),
    document.createTextNode('johzao')
  ])
})
