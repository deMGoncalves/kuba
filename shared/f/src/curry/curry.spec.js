import * as f from '@f'

describe('f.curry', function () {
  test('execucao unica', function () {
    const x = (a, b, c) => a * b / c // x(2, 6, 3) => 2 * 6 / 3
    const y = f.curry(x)

    expect(y(2, 6, 3)).toBe(4)
  })

  test('execucao multipla', function () {
    const x = (a, b, c) => a * b / c // x(2, 6, 3) => 2 * 6 / 3
    const y = f.curry(x)

    expect(y(2)(6)(3)).toBe(4)
    expect(y(2, 6)(3)).toBe(4)
    expect(y(2)(6, 3)).toBe(4)
  })

  describe('f.__', function () {
    test('execucao multipla', function () {
      const x = (a, b, c) => a * b / c // x(2, 6, 3) => 2 * 6 / 3
      const y = f.curry(x)

      expect(y(2)(6, 3)).toBe(4)
      expect(y(2, 6)(3)).toBe(4)

      expect(y(f.__, 6)(2, 3)).toBe(4)
      expect(y(f.__, 6, 3)(2)).toBe(4)
      expect(y(2, f.__, 3)(6)).toBe(4)
      expect(y(2, 6, f.__)(3)).toBe(4)

      expect(y(f.__, f.__, 3)(2, 6)).toBe(4)
      expect(y(2, f.__, f.__)(6, 3)).toBe(4)
      expect(y(f.__, 6, f.__)(2, 3)).toBe(4)

      expect(y()(2, 6, 3)).toBe(4)
      expect(y(f.__, f.__, f.__)(2, 6, 3)).toBe(4)
    })
  })

  describe('f.arity', function () {
    test('excucao unica', function () {
      const x = (a, b, c, d) => (a * b / c) + d // x(2, 6, 3, 1) => (2 * 6 / 3) + 1
      const y = f.curry(f.arity(3, x))

      expect(y(2, 6, 3, 1)).toBe(5)
    })

    test('execucao multipla', function () {
      const x = (a, b, c, d) => (a * b / c) + d // x(2, 6, 3, 1) => (2 * 6 / 3) + 1
      const y = f.curry(f.arity(3, x))

      expect(y(2)(6, 3, 1)).toBe(5)
      expect(y(2, 6)(3, 1)).toBe(5)

      expect(y(f.__, 6)(2, 3, 1)).toBe(5)
      expect(y(f.__, 6, 3)(2, 1)).toBe(5)
      expect(y(2, f.__, 3)(6, 1)).toBe(5)
      expect(y(2, 6, f.__)(3, 1)).toBe(5)

      expect(y(f.__, f.__, 3)(2, 6, 1)).toBe(5)
      expect(y(2, f.__, f.__)(6, 3, 1)).toBe(5)
      expect(y(f.__, 6, f.__)(2, 3, 1)).toBe(5)

      expect(y()(2, 6, 3, 1)).toBe(5)
      expect(y(f.__, f.__, f.__)(2, 6, 3, 1)).toBe(5)
    })
  })
})
