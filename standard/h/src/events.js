import Event from './event'
import magic from '@kuba/magic'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'

class Events {
  #target
  #eventList

  constructor (eventList, target) {
    this.#eventList = eventList
    this.#target = target
  }

  [reflow.add] (nEvent) {
    this.#eventList.push(nEvent)
    this.#target.addEventListener(nEvent)
    return this
  }

  [reflow.remove] (event) {
    const start = this.#eventList.indexOf(event)
    this.#eventList.splice(start, 1)
    this.#target.removeEventListener(event)
    return this
  }

  [reflow.replace] (event, nEvent) {
    const start = this.#eventList.indexOf(event)
    this.#eventList.splice(start, 1, nEvent)
    this.#target.removeEventListener(event)
    this.#target.addEventListener(nEvent)
    return this
  }

  [render.flow] () {
    this.#eventList.forEach((event) => this.#target.addEventListener(event))
    return this
  }

  [repaint.reflow] (nEvent) {
    reflow(this, nEvent)
    return this
  }

  [magic.zip] () {
    return this.#eventList
  }

  static create (attrList, target) {
    attrList = Event.mapper(attrList)
    return new Events(attrList, target)
  }
}

export default Events
