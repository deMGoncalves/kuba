import h from '@kuba/h'
import * as f from '@kuba/f'
import style from './style.css'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      <a { ...props } className={[style.link, style[f.toLower(type)], props.className]}>{children}</a>
})
