import h, { render } from '@kuba/h'
import router from '@kuba/router'

router('/:departament', async function departament () {
  const { default: Departament } = await import('./departament' /* webpackChunkName: "departament" */)
  render(document.body, <Departament />)
})
