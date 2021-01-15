import * as f from '@rex/f'
import config from '@rex/config'
import defineComponent from './defineComponent'

config
  .fetchAndActivate()
  .then(() => f.forEach(config.AWP, defineComponent))
