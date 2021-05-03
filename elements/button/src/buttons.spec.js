import h from '@kuba/h'
import * as f from '@kuba/f'
import button from '@kuba/button'

jest.mock('@kuba/h')
jest.mock('@kuba/f')

beforeEach(function () {
  h.mockClear()
  f.toLower.mockClear()
})

test('O tipo do botao eh determinado apos o operado de acesso', function () {
  button.Master({}, []) // <button.Master />

  expect(f.toLower).toHaveBeenCalled()
  expect(f.toLower).toHaveBeenCalledTimes(1)
  expect(f.toLower).toHaveBeenCalledWith('Master')

  expect(h).toHaveBeenCalled()
  expect(h).toHaveBeenCalledTimes(1)
  expect(h).toHaveBeenCalledWith('a', { className: [undefined, undefined, undefined] })
})
