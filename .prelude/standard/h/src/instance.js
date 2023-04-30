import paint from './paint'

class Instance {
  static mapper (children) {
    return children.map((child) => child[paint.rootAST]?.() ?? child)
  }
}

export default Instance
