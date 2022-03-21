import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import echo from '@kuba/echo'
import Option from './option'
import schema from './schema.json'
import scroll from './scroll'

@paint(component)
class Flex {
  #len
  #opened
  #options

  get len () {
    return f
      .from(this.options)
      .pipe(f.filter(f.__, f.prop('selected')))
      .pipe(f.len)
      .done()
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return this.#options ??= f.map(schema, Option.create(this))
  }

  @repaint
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @scroll.lock
  open () {
    this.#opened = f.T()
    return this
  }

  @repaint
  [Option.onChange] () {
    echo.emit('filter:change', {
      key: 'flex',
      value: f
        .from(this.options)
        .pipe(f.filter(f.__, f.prop('selected')))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    })
    return this
  }
}

export default Flex
