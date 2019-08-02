import h from '../'
import isTagName from '../isTagName'

jest.mock('../isTagName.js')

test('h', () => {
  expect(h).toBeDefined()
})

test('Deve criar um elemento quando o parametro tagNameOrComponent for um string', () => {
  isTagName.mockReturnValue(true)

  expect(h('div')).toEqual(document.createElement('div'))

  expect(isTagName).toHaveBeenCalled()
  expect(isTagName).toHaveBeenCalledTimes(1)
  expect(isTagName).toHaveBeenCalledWith('div')
})
