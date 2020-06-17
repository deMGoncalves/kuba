import h from '@h'
import router from '@router'

router(/^\/(samsung-galaxy-a30s-64gb-branco)$/, async () => {
  const { default: Product } = await import(/* webpackChunkName: "product" */ '@pages/product')
  document.body.appendChild(<Product />)
})
