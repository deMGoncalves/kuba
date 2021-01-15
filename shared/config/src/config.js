import * as f from '@rex/f'
import firebase from '@rex/firebase'

export default new Proxy(
  firebase.remoteConfig(),
  {
    get: (config, key) =>
      f.has(key, config)
        ? config[key]
        : JSON.parse(f.or(config.getValue(key)._value, 'null'))
  }
)
