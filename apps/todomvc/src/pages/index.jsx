import h from '@rex/h'
import router from '@rex/router'
import '@rex/reset'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ '@pages/home')
  document.body.append(<Home />)
})

router(/^\/empresa$/, async () => {
  const { default: Empresa } = await import(/* webpackChunkName: "empresa" */ '@pages/empresa')
  document.body.append(<Empresa />)
})

router(/^\/imas$/, async () => {
  const { default: Imas } = await import(/* webpackChunkName: "imas" */ '@pages/imas')
  document.body.append(<Imas />)
})

router(/^\/equipamentos-magneticos$/, async () => {
  const { default: Equipamentos } = await import(/* webpackChunkName: "equipamentos" */ '@pages/equipamentos')
  document.body.append(<Equipamentos />)
})

router(/^\/utensilios-magneticos$/, async () => {
  const { default: Utensilios } = await import(/* webpackChunkName: "utensilios" */ '@pages/utensilios')
  document.body.append(<Utensilios />)
})

router(/^\/servicos$/, async () => {
  const { default: Servicos } = await import(/* webpackChunkName: "servicos" */ '@pages/servicos')
  document.body.append(<Servicos />)
})

router(/^\/blog$/, async () => {
  const { default: Blog } = await import(/* webpackChunkName: "blog" */ '@pages/blog')
  document.body.append(<Blog />)
})

router(/^\/faq$/, async () => {
  const { default: Faq } = await import(/* webpackChunkName: "faq" */ '@pages/faq')
  document.body.append(<Faq />)
})

router(/^\/glossario$/, async () => {
  const { default: Glossario } = await import(/* webpackChunkName: "glossario" */ '@pages/glossario')
  document.body.append(<Glossario />)
})

router(/^\/contato$/, async () => {
  const { default: Contato } = await import(/* webpackChunkName: "contato" */ '@pages/contato')
  document.body.append(<Contato />)
})

router(/^\/orcamento$/, async () => {
  const { default: Orcamento } = await import(/* webpackChunkName: "orcamento" */ '@pages/orcamento')
  document.body.append(<Orcamento />)
})

router(/^\/([a-z-]+)\/([a-z-]+)$/, async () => {
  const { default: Produto } = await import(/* webpackChunkName: "produto" */ '@pages/produto')
  document.body.append(<Produto />)
})
