class Body {
  static lock () {
    document.body.style = 'overflow: hidden;'
    return this
  }

  static unlock () {
    document.body.removeAttribute('style')
    return this
  }
}

export default Body
