const Pagina = require('./pagina')
const shape = require('./shape')
const Scraper = require('./scraper')

Scraper.acessa(Pagina.do(shape)).baixaHtml().tiraScreenshot()
