import ambient from '@kuba/ambient'

window.addEventListener('load', function () {
  ambient.production && (
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */))
  )
})
