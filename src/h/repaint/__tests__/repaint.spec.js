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

    f.assign.mockReturnValue(descriptor)

    expect(repaint(target, method, descriptor)).toBe(descriptor)

    expect(f.assign).toHaveBeenCalled()
    expect(f.assign).toHaveBeenCalledTimes(1)
    expect(f.assign).toHaveBeenCalledWith(descriptor, {})
  })
})
