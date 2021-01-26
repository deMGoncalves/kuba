import * as f from '@rex/f'
import firebase from '@rex/firebase'

const remoteConfig = firebase.remoteConfig()
remoteConfig.settings.minimumFetchIntervalMillis = 3600

export default new Proxy(
  remoteConfig,
  {
    get: (config, key) =>
      f.has(key, config)
        ? config[key]
        : JSON.parse(f.or(config.getValue(key)._value, 'null'))
  }
)
