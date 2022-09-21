const puppeteer = require('puppeteer')

class Pagina {
  #init
  #shape

  constructor (shape, init) {
    this.#init = init
    this.#shape = shape
  }

  static async do (shape) {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto(shape.url)

    return new Pagina(shape, { browser, page })
  }
}

module.exports = Pagina
