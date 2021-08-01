class Text {
  #content

  constructor (content) {
    this.#content = content
  }

  paint () {
    return {
      content: this.#content,
      type: 3
    }
  }

  static create (content) {
    return new Text(content)
  }
}

export default Text
