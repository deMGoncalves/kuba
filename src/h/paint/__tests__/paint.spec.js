import h from '../../h'
import paint from '../'

const Component = (attrs) =>
  <div>
    <p>{attrs.score}</p>
    <button onClick={() => attrs.inc()}>Increment</button>
  </div>

@paint(Component)
class Counter {
  get score () {
    return this.__score__
  }

  constructor (attrs = {}) {
    this.__score__ = attrs.score || 0
    return this
  }

  inc () {
    this.__score__ += 1
    return this
  }
}

test('Deve retornar HTMLElemnt quando executar o component encapsulado', () => {
  expect(<Counter />).toBeInstanceOf(HTMLElement)
})

test('Deve retornar Object quando executar a class encapsulada', () => {
  expect(new Counter()).toBeInstanceOf(Object)
})

test('Deve retornar o valor do score quando consultar o html do p', () => {
  expect((<Counter />).querySelector('p').innerHTML).toBe('0')
  expect((<Counter score={1} />).querySelector('p').innerHTML).toBe('1')
})

test('Deve retoranr o valor do score quando consultar a propriedade score do objeto', () => {
  expect((new Counter()).score).toBe(0)
})
