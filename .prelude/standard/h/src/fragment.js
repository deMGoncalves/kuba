import Children from './children'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import overload from '@kuba/overload'
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
class Fragment {
  #children
  #node
  #slot

  get children () {
    return this.#children
  }

  get slot () {
    return this.#slot.value
  }

  constructor (attrs, children) {
    this.#children = Children.create(children, this)
    this.#slot = Slot.create(attrs)
  }

  @overload(
    'appendChild'
  )
  after (child) {
    const [...childList] = this.#children
    const lastChild = childList.pop()
    lastChild.after(child)
    return this
  }

  append (childList) {
    const nodeList = childList.map((child) => child[render.flow]())
    this.#node.append(...nodeList)
    return this
  }

  @didUnmount
  @willUnmount
  remove () {
    const [...childList] = this.#children
    childList.forEach((child) => child.remove())
    return this
  }

  replace (child, nChild) {
    child.after(nChild)
    child.remove()
    return this
  }

  [reflow.different] (nFragment) {
    return (
      this[paint.instance]?.() !== nFragment[paint.instance]?.()
    )
  }

  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createDocumentFragment()
    this.children[render.flow]()
    return this.#node
  }

  @didUpdate
  @willUpdate
  [repaint.reflow] (fragment) {
    this.children[repaint.reflow](fragment.children)
    return this
  }

  static execute (attrs, children) {
    attrs = Object.entries(attrs)
    children = children.flat(Infinity)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
