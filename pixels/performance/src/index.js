import * as f from '@rex/f'
import agent from '@rex/agent'
import firebase from '@rex/firebase'

f.and(
  agent.isUser,
  f.equal(process.env.NODE_ENV, 'production')
) && firebase.performance()
