import h from '@h'
import router from '@router'
// import '@sw'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/^\/sitemap$/, async () => {
  document.body.appendChild(<ul><li><a href='https://jrmod.net'>home</a></li></ul>)
})
