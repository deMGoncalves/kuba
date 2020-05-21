import h from '@h'
import router from '@router'
import '@sw'
import './reset.css'

router(/\/controle-de-despesas/, async () => {
  const { default: ControleDeDespesas } = await import(/* webpackChunkName: "controleDeDespesas" */ './controleDeDespesas')
  document.body.appendChild(<ControleDeDespesas />)
})
