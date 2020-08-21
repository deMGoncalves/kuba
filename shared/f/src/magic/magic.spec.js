import * as f from '@f'

describe('f.magic', function () {
  test('a mesma key devolve o mesmo simbolo', function () {
    expect(f.magic('and')).toEqual(f.magic('and'))
  })

  test('keys diferent devolve simbolos diferentes', function () {
    expect(f.magic('and')).not.toEqual(f.magic('map'))
  })
})
