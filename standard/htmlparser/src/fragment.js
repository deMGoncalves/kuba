import * as f from '@kuba/f'

class Fragment {
  #children = []

  append (...children) {
    f.push(this.#children, ...children)
    return this
  }

  paint () {
    return {
      children: f.map(this.#children, child => child.paint()),
      type: 11
    }
  }

  static execute () {
    return new Fragment()
  }
}

export default Fragment
