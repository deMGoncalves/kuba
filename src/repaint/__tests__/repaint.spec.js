import h, { paint } from '../../h'
import repaint from '../'

const Component = (attrs) =>
  <div id='xablau'>
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

  @repaint
  inc () {
    this.__score__ += 1
    return this
  }
}

test('Deve retornar o novo valor do score quando consultar o html do p', () => {
  const counter = <Counter score={0} />
  expect(counter.querySelector('p').innerHTML).toBe('0')
  counter.querySelector('button').dispatchEvent(new Event('click'))
  expect(counter.querySelector('p').innerHTML).toBe('1')
})

test('Deve retornar o novo valor de score quando consultar a propriedade score do objeto', () => {
  const counter = new Counter()
  counter.inc()
  expect(counter.score).toBe(1)
})
