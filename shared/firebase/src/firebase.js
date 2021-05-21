import firebase from 'firebase/app'
import settings from './settings'

import 'firebase/analytics'
import 'firebase/performance'

firebase.initializeApp(settings)
firebase.analytics()
firebase.performance()

export default firebase
