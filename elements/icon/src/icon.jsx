import h from '@kuba/h'
import * as mapper from './mapper'
import merge from './merge'
import style from './style'

export default new Proxy({}, {
  get: (_, name) =>
    (props) =>
      <img className={[style.icon, props.className]} src={mapper[merge(props, name)]} loading='lazy' alt={props.alt} small:isTruthy={props.small} large:isTruthy={props.large} />
})
