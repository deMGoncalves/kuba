import h from '@h'
import router from '@router'
import '@sw'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/^\/([\w-]+)$/, async (path) => {
  const { default: Departamento } = await import(/* webpackChunkName: "departamento" */ './departamento')
  document.body.appendChild(<Departamento router={path} />)
})
