import h from '@h'
import router from '@router'
import '@sw'
import './reset.css'

router(/\/calculadora/, async () => {
  const { default: Calculadora } = await import(/* webpackChunkName: "calculadora" */ './calculadora')
  document.body.appendChild(<Calculadora />)
})
