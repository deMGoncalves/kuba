import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/.*', async function pageNotFound () {
  const { default: PageNotFound } = await import('./pageNotFound' /* webpackChunkName: "pageNotFound" */)
  render(document.body, <PageNotFound />)
})
