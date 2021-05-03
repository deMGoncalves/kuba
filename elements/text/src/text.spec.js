import h from '@kuba/h'
import text from './text'

jest.mock('@kuba/h')

beforeEach(function () {
  h.mockClear()
})

test('O html tag eh determinado apos o operado de acesso', function () {
  const p = text.P({}, []) // <text.P />
  
  expect(h).toHaveBeenCalled()
  expect(h).toHaveBeenCalledTimes(1)
  expect(h).toHaveBeenCalledWith('P', { className: [undefined, undefined] })
})
