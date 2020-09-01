import * as f from '@rex/f'

describe('f.always', function () {
  test('sempre retorna o valor primitivo passado', function () {
    expect(f.always(undefined)()).toBeUndefined()
    expect(f.always(undefined)(null)).toBeUndefined()

    expect(f.always(null)()).toBe(null)
    expect(f.always(null)(undefined)).toBeNull()

    expect(f.always(1)()).toBe(1)
    expect(f.always(1)(2)).toBe(1)

    expect(f.always('rex')()).toBe('rex')
    expect(f.always('rex')('react')).toBe('rex')

    expect(f.always(NaN)()).toBe(NaN)
    expect(f.always(NaN)(1)).toBe(NaN)

    expect(f.always(true)()).toBeTruthy()
    expect(f.always(true)(false)).toBeTruthy()

    expect(f.always(false)()).toBeFalsy()
    expect(f.always(false)(true)).toBeFalsy()
  })

  test('sempre retorna a referencia do valor passado', function () {
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
