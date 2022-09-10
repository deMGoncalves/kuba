const puppeteer = require('puppeteer')

class Pagina {
  #shape

  constructor (shape) {
    this.#shape = shape
  }

  static async do (shape) {
    const _browser = await puppeteer.launch({ headless: false })
    const _page = await browser.newPage()

    await _page.goto(shape.url)

    return new Pagina(shape, _browser, _page)
  }
}

module.exports = Pagina
