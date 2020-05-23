import h from '@h'
import router from '@router'
import '@sw'
import './reset.css'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ './home')
  document.body.appendChild(<Home />)
})

router(/^\/([\w-]+)$/, async (departamento) => {
  const { default: Departamento } = await import(/* webpackChunkName: "departamento" */ './departamento')
  document.body.appendChild(<Departamento {...{ departamento }} />)
})

router(/^\/([\w-]+)\/([\w-]+)$/, async (departamento, categoria) => {
  const { default: Categoria } = await import(/* webpackChunkName: "categoria" */ './categoria')
  document.body.appendChild(<Categoria {...{ departamento, categoria }} />)
})
