import * as f from '@f'

describe('f.always', function () {
  test('retorna o valor inicial', function () {
    expect(f.always()()).toBeUndefined()
    expect(f.always()(null)).toBeUndefined()

    expect(f.always(null)()).toBe(null)
    expect(f.always(null)(undefined)).toBeNull()

    expect(f.always(1)()).toBe(1)
    expect(f.always(1)(2)).toBe(1)

    expect(f.always('rex')()).toBe('rex')
    expect(f.always('rex')('react')).toBe('rex')
  })
})
