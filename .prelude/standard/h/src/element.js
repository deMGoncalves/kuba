import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import Events from './events'
import Is from './is'
import Key from './key'
import paint from './paint'
import reflow from './reflow'
import render from './render'
import repaint from './repaint'
import revoke from '@kuba/revoke'
import Slot from './slot'
import willMount from './willMount'
import willUpdate from './willUpdate'
import willUnmount from './willUnmount'

@revoke
class Element {
  #attributes
  #children
  #className
  #events
  #is
  #key
  #node
  #nodeName
  #slot

  get attributes () {
    return this.#attributes
  }

  get children () {
    return this.#children
  }

  get className () {
    return this.#className
  }

  get events () {
    return this.#events
  }

  get is () {
    return this.#is.value
  }

  get key () {
    return this.#key.value
  }

  get nodeName () {
    return this.#nodeName
  }

  get slot () {
    return this.#slot.value
  }

  get __node__ () {
    return this.#node
  }

  constructor (nodeName, attrs, children) {
    this.#nodeName = nodeName
    this.#attributes = Attributes.create(attrs, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(attrs, this)
    this.#events = Events.create(attrs, this)
    this.#is = Is.create(attrs)
    this.#key = Key.create(attrs)
    this.#slot = Slot.create(attrs)
  }

  addEventListener (event) {
    Reflect.set(this.#node, ...event)
    return this
  }

  after (child) {
    const node = child[render.flow]()
    this.#node.after(node)
    return this
  }

  append (childList) {
    const nodeList = childList.map((child) => child[render.flow]())
    this.#node.append(...nodeList)
    return this
  }

  appendChild (child) {
    const node = child[render.flow]()
    this.#node.appendChild(node)
    return this
  }

  @didUnmount
  @willUnmount
  remove () {
    this.#node.remove()
    return this
  }

  removeAttribute (attr) {
    this.#node.removeAttribute(attr.key)
    return this
  }

  removeEventListener (event) {
    delete this.#node[event.name]
    return this
  }

  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  setAttribute (attr) {
    this.#node.setAttribute(...attr)
    return this
  }

  [reflow.different] (nElement) {
    return (
      this[paint.instance]?.() !== nElement[paint.instance]?.() ||
      this.nodeName !== nElement.nodeName ||
      this.is !== nElement.is ||
      this.key !== nElement.key
    )
  }

  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createElement(this.nodeName, { is: this.is })
    this.events[render.flow]()
    this.attributes[render.flow]()
    this.className[render.flow]()
    this.children[render.flow]()
    return this.#node
  }

  @didUpdate
  @willUpdate
  [repaint.reflow] (nElement) {
    this.events[repaint.reflow](nElement.events)
    this.attributes[repaint.reflow](nElement.attributes)
    this.className[repaint.reflow](nElement.className)
    this.children[repaint.reflow](nElement.children)
    return this
  }

  static create (nodeName, attrs, children) {
    attrs = Object.entries(attrs)
    children = children.flat(Infinity)
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
