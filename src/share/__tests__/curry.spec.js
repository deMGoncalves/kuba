import __ from '../__'
import curry from '../curry'

var t = curry(() => true)
var inverse = curry(x => -x)
var add = curry((x, y) => x + y)
var reduce = curry((x, y, z) => x.reduce(z, y))

test('Deve executar a funcao quando não houver parametro', () => {
  expect(t()).toEqual(true)
})

test('Deve retornar a propria funcao inserve quando nao passar nenhum parametro', () => {
  expect(inverse()).toEqual(inverse)
})

test('Deve executar a funcao quando passar um paremetro de um', () => {
  expect(inverse(1)).toBe(-1)
  expect(inverse()(1)).toBe(-1)
})

test('Deve retornar a propria funcao add quando nao passar nenhum parametro', () => {
  expect(add()).toEqual(add)
})

test('Deve retornar uma funcao complmentar quando passar apenas um parametro de dois', () => {
  expect(add(1)).toBeInstanceOf(Function)
  expect(add(1, __)).toBeInstanceOf(Function)
  expect(add(__, 2)).toBeInstanceOf(Function)
})

test('Deve executar a funcao quando passar dois parametros de dois', () => {
  expect(add(1, 2)).toBe(3)
  expect(add(1)(2)).toBe(3)
  expect(add(1, __)(2)).toBe(3)
  expect(add(__, 2)(1)).toBe(3)
})

test('Deve retornar uma funcao complementar quando passar apenas um parametro de tres', () => {
  expect(reduce([1, 2])).toBeInstanceOf(Function)
  expect(reduce(__, 0, __)).toBeInstanceOf(Function)
  expect(reduce(__, __, add)).toBeInstanceOf(Function)
})

test('Deve retornar uma funcao complementar quando passar apenas dois parametro de tres', () => {
  expect(reduce([1, 2], 0, __)).toBeInstanceOf(Function)
  expect(reduce([1, 2], __, add)).toBeInstanceOf(Function)
  expect(reduce(__, 0, add)).toBeInstanceOf(Function)
})

test('Deve executar a funcao quando passar tres parametros de tres', () => {
  expect(reduce([1, 2], 0, add)).toBe(3)
  expect(reduce([1, 2], 0, __)(add)).toBe(3)
  expect(reduce([1, 2], __, add)(0)).toBe(3)
  expect(reduce(__, 0, add)([1, 2])).toBe(3)
  expect(reduce([1, 2])(0)(add)).toBe(3)
  expect(reduce([1, 2], 0)(add)).toBe(3)
  expect(reduce([1, 2], __, add)(0)).toBe(3)
  expect(reduce(__, 0, add)([1, 2])).toBe(3)
  expect(reduce([1, 2])(0, add)).toBe(3)
  expect(reduce(__, 0)([1, 2], add)).toBe(3)
  expect(reduce(__, __, add)([1, 2], 0)).toBe(3)
  expect(reduce(__, 0, __)([1, 2], add)).toBe(3)
})
