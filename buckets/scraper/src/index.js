const Scraper = require('./scraper')
const Pagina = require('./pagina')

Scraper.acessa(Pagina.doProduto()).baixaHtml().tiraScreenshot()
