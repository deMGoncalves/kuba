import h from '@h'
import config from './config.json'

if (process.env.NODE_ENV === 'production') {
  (async () => {
    const { default: firebase } = await import(/* webpackChunkName: "firebase" */ 'firebase')

    firebase.initializeApp(config)
    firebase.analytics()
  })()
}
