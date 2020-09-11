import { paint, repaint } from '@rex/h'
import * as f from '@rex/f'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Nav {
  get status () {
    return this[oneOff].status
      ? 'opened'
      : 'closed'
  }

  constructor () {
    this[oneOff] = {}
    return this
  }

  @repaint
  toggle () {
    this[oneOff].status = f.not(this[oneOff].status)
    console.log('nav.toggle', this.status)
    return this
  }
}

export default Nav
