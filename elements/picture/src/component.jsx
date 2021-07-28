import h from '@kuba/h'
import * as f from '@kuba/f'
import style from './style'

export default (props, children) =>
  <picture {...props} className={[style.picture, props.className]}>
    {children}
    <img className={style.picture__img} loading='lazy' alt={f.or(props.alt, __settings.app.name)} />
  </picture>
