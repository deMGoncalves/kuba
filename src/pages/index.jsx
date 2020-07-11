import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: Product } = await import(/* webpackChunkName: "product" */ '@pages/product')
  document.body.append(<Product />)
})
