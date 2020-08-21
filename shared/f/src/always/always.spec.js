import * as f from '@f'

describe('f.always', function () {
  test('sempre retorna o primeiro valor primitivo', function () {
    expect(f.always()()).toBeUndefined()
    expect(f.always()(null)).toBeUndefined()

    expect(f.always(null)()).toBe(null)
    expect(f.always(null)(undefined)).toBeNull()

    expect(f.always(1)()).toBe(1)
    expect(f.always(1)(2)).toBe(1)

    expect(f.always('rex')()).toBe('rex')
    expect(f.always('rex')('react')).toBe('rex')

    expect(f.always(NaN)()).toBe(NaN)
    expect(f.always(NaN)(1)).toBe(NaN)
  })

  test('sempre retorna a referencia do primeiro valor', function () {
    const x = {}
    expect(f.always(x)()).toEqual(x)
    expect(f.always(x)({})).toEqual(x)

    const y = []
    expect(f.always(y)()).toEqual(y)
    expect(f.always(y)([])).toEqual(y)

    const z = new Date()
    expect(f.always(z)()).toEqual(z)
    expect(f.always(z)(new Date())).toEqual(z)
  })
})
