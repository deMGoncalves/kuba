class Scraper {
  #pagina

  constructor (pagina) {
    this.#pagina = pagina
  }

  baixarHtml () {
    return this
  }

  tirarScreenshot () {
    return this
  }

  static acessa (pagina) {
    return new Scraper(pagina)
  }
}

module.exports = Scraper
