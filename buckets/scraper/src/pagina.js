class Pagina {
  #shape

  constructor (shape) {
    this.#shape = shape
  }

  static do (shape) {
    return new Pagina(shape)
  }
}

module.exports = Pagina
