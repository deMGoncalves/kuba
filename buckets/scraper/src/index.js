const Pagina = require('./pagina')
const shape = require('./shape')
const Scraper = require('./scraper')

;(async () => {
	const pagina = await Pagina.do(shape)

	Scraper.acessa(pagina).baixarHtml().tirarScreenshot()
})()