class Scraper {
  #pagina

  constructor (pagina) {
    this.#pagina = pagina
  }

  baixaHtml () {
    return this
  }

  tiraScreenshot () {
    return this
  }

  static acessa (pagina) {
    return new Scraper(pagina)
  }
}

module.exports = Scraper
