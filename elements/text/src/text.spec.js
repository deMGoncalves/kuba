import h from '@kuba/h'
import text from '@kuba/text'

jest.mock('@kuba/h')

beforeEach(function () {
  h.mockClear()
})

test('O html tag eh determinado apos o operado de acesso', function () {
  text.P({}, []) // <text.P />
  
  expect(h).toHaveBeenCalled()
  expect(h).toHaveBeenCalledTimes(1)
  expect(h).toHaveBeenCalledWith('P', { className: [undefined, undefined] })
})

test('As cores e tamanhos sao determinados por atributos', function () {
  text.P({ master: true, darker: true, small: true }, []) // <text.P master darker small />

  expect(h).toHaveBeenCalled()
  expect(h).toHaveBeenCalledTimes(1)
  expect(h).toHaveBeenCalledWith('P', { master: true, darker: true, small: true, className: [undefined, undefined] })
})
