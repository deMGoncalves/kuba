import h from '@kuba/h'
import renderer from '@kuba/renderer'
import text from '@kuba/text'

test('Deve renderizar um paragrafo quando o namespace for text.P', function () {
  const tree = renderer(<text.P>zuen</text.P>)
  expect(tree).toMatchSnapshot()
})
