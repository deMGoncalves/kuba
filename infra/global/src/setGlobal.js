import * as f from '@kuba/f'
import echo from '@kuba/echo'
import global from './global'

export default (data) => (
  f.assign(global, data),
  echo.emit('global:effect', global)
)
