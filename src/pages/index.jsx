import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: Home } = await import(/* webpackChunkName: "home" */ '@pages/home')
  document.body.appendChild(<Home />)
})

router(/^\/([\w-]+)$/, async () => {
  const { default: Departament } = await import(/* webpackChunkName: "departament" */ '@pages/departament')
  document.body.appendChild(<Departament />)
})

router(/^\/([\w-]+)\/([\w-]+)$/, async () => {
  const { default: Category } = await import(/* webpackChunkName: "category" */ '@pages/category')
  document.body.appendChild(<Category />)
})
