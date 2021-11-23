import h from '@kuba/h'
import Picture from '@kuba/picture'
import * as mapper from './mapper'
import merge from './merge'
import style from './style'

export default new Proxy({}, {
  get: (_, name) =>
    (props) =>
      <Picture {...props} className={[style.icon, props.className]}>
        <source srcSet={mapper[merge(name, props)]} />
      </Picture>
})
