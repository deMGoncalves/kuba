import * as f from '@kuba/f'
import * as mapper from './mapper'
import * as settings from '@kuba/settings'
import h from '@kuba/h'
import merge from './merge'
import style from './style'

export default new Proxy({}, {
  get: (_, name) =>
    (props) =>
      <img {...props} className={[style.icon, props.className]} src={mapper[merge(props, name)]} loading='lazy' alt={f.or(props.alt, settings.app.name)} />
})
