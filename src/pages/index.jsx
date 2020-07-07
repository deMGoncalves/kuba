import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: iPhone } = await import(/* webpackChunkName: "product" */ '@pages/iphone')
  document.body.append(<iPhone />)
})
