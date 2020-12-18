import h, { paint, repaint, start } from '@rex/htmlparser'
import * as f from '@rex/f'
import component from './component'

@start
@paint(component)
class Header {
  #status

  get status () {
    return this.#status ? 'opened' : 'closed'
  }

  constructor () {
    this.#status = f.F()
  }

  @repaint
  toggle () {
    this.#status = f.not(this.#status)
    return this
  }
}

export default Header
