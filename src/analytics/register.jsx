import h from '@h'
import * as firebase from 'firebase/app'
import config from './config.json'
import 'firebase/analytics'

if (process.env.NODE_ENV === 'production') {
  firebase.initializeApp(config)
  firebase.analytics()
}
