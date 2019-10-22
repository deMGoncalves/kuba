import h from '@h'
import router from '@router'

router(/^\/$/, async () => {
  const { default: Drums } = await import(/* webpackChunkName: 'drums' */ './drums')
  document.body.appendChild(<Drums />)
})
