import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: iPhone } = await import(/* webpackChunkName: "iphone" */ '@pages/iphone')
  document.body.append(<iPhone />)
})
