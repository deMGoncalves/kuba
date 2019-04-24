import h from '../h'
import createElement from '../createElement'

test('Retor um elemento depois que executar a funcao com o paremetros corretos', () => {
  expect(createElement('div', { class: 'joh' }, ['Johzao'])).toEqual(<div class='joh'>Johzao</div>)
})
