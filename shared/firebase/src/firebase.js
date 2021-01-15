import * as f from '@rex/f'
import firebase from 'firebase/app'
import dev from './dev.json'
import prod from './prod.json'

import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/remote-config'

firebase.initializeApp(f.equal(process.env.NODE_ENV, 'production') ? prod : dev)

export default firebase
