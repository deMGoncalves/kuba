import * as f from '@rex/f'
import agent from '@rex/agent'
import env from '@rex/env'
import firebase from '@rex/firebase'

f.and(agent.isUser, env.isProd) && firebase.performance()
