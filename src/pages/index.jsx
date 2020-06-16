import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ '@pages/home')
  document.body.appendChild(<Home />)
})
