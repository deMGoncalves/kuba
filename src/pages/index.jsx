import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: IPhone } = await import(/* webpackChunkName: "iphone" */ '@pages/iphone')
  document.body.append(<IPhone />)
})
