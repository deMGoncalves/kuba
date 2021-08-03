class Text {
  #content

  constructor (content) {
    this.#content = content
  }

  paint () {
    return {
      content: this.#content
    }
  }

  static create (content) {
    return new Text(content)
  }
}

export default Text
