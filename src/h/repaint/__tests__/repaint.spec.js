import * as f from '@f'
import hook from '../hook'
import repaint from '../repaint'

jest.mock('../../../f/assign.js')
jest.mock('../hook.js')

describe('repaint', () => {
  beforeEach(() => {
    f.assign.mockReset()
    hook.mockReset()
  })

  test('Deve retornar o descriptor com o value alterado', () => {
    const target = {}
    const method = ''
    const descriptor = { value: () => {} }
    const value = () => {}

    f.assign.mockReturnValue(descriptor)
    hook.mockReturnValue(value)

    expect(repaint(target, method, descriptor)).toBe({ value })

    expect(f.assign).toHaveBeenCalled()
    expect(f.assign).toHaveBeenCalledTimes(1)
    expect(f.assign).toHaveBeenCalledWith(descriptor, { value })

    expect(hook).toHaveBeenCalled()
    expect(hook).toHaveBeenCalledTimes(1)
    expect(hook).toHaveBeenCalledWith(descriptor.value)
  })
})
