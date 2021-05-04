import h from '@kuba/h'
import box from '@kuba/box'

jest.mock('@kuba/h')

beforeEach(function () {
  h.mockClear()
})

test('Os atributos sao extendido no tag div do container', function () {
  box({ slot: 'main' }, [])

  expect(h).toHaveBeenCalled()
  expect(h).toHaveBeenCalledTimes(1)
  expect(h).toHaveBeenCalledWith('div', { slot: 'main', className: [undefined, undefined] }, [])
})
