import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Metro {
  #className
  #current
  #isShortClick
  #isDragging
  #listeners
  #props
  #scrollLeft
  #start
  #target

  get className () {
    return this.#className
  }

  get isDragging () {
    return this.#isDragging ??= f.F()
  }

  get isShortClick () {
    return this.#isShortClick ??= f.F()
  }

  get props () {
    return this.#props
  }

  constructor (props) {
    this.#className = props.className
    this.#current = { x: 0, y: 0 }
    this.#start = { x: 0, y: 0 }
    this.#props = props
    this.#listeners = [
      { event: 'mousemove', listener: e => this.isDragging && this.scrollMove(e) },
      { event: 'mousedown', listener: e => this.startDragging(e) },
      { event: 'mouseup', listener: e => this.stopDragging(e) },
      { event: 'mouseleave', listener: e => this.stopDragging(e) }
    ]
  }

  addEventListener (event, listener) {
    this.#target.addEventListener(event, listener)
    return this
  }

  changeIsShortClick (value) {
    this.#isShortClick = value
    return this
  }

  dispatchEvent (event) {
    this.isShortClick && f.some(event.path, (e) => e.onshortclick?.())
    return this
  }

  @didMount
  mount () {
    this.#target = this[f.dunder.tag].element
    f.forEach(this.#listeners, e => this.addEventListener(e.event, e.listener))
    return this
  }

  scrollMove (event) {
    event.preventDefault()
    const x = event.pageX - this.#target.offsetLeft
    const scroll = x - this.#start.x + this.#target.offsetLeft
    this.#target.scrollLeft = this.#scrollLeft - scroll
    return this
  }

  startDragging (event) {
    event.preventDefault()
    this.changeIsShortClick(f.F())
    this.#isDragging = f.T()
    this.#start.x = event.pageX
    this.#start.y = event.pageY
    this.#scrollLeft = this.#target.scrollLeft
    return this
  }

  stopDragging (event) {
    event.preventDefault()
    this.#isDragging = f.F()
    this.#current.x = event.pageX
    this.#current.y = event.pageY
    this.verifyIsShortCLick(event)
    return this
  }

  verifyIsShortCLick (event) {
    f.equal(this.#start.x, this.#current.x) &&
    f.equal(this.#start.y, this.#current.y) &&
    this.changeIsShortClick(f.T()) &&
    this.dispatchEvent(event)
    return this
  }
}

export default Metro
