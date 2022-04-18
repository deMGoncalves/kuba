import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <picture className={[style.picture, props.className]} onClick={props.onClick}>
    {children}
    <img className={style.picture__img} loading='auto' alt={f.or(props.alt, settings.app.name)} height={props.height} width={props.width} />
  </picture>
