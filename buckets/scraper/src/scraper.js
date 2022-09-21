class Scraper {
  #pagina

  constructor (pagina) {
    this.#pagina = pagina
  }

  async baixarHtml () {
    return this
  }

  async tirarScreenshot () {
    return this
  }

  static async acessa (pagina) {
    return new Scraper(pagina)
  }
}

module.exports = Scraper
