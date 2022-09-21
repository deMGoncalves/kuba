const Pagina = require('./pagina')
const shape = require('./shape')
const Scraper = require('./scraper')

;(async () => {
  // Scraper acessa a pagina do shape, baixa o html e tira um screenshot
  const pagina = await Pagina.do(shape)
  const scraper = await Scraper.acessa(pagina)
  await scraper.baixarHtml()
  await scraper.tirarScreenshot()
})()
