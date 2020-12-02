import h from '@rex/h'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <picture className={[style.picture, props.className]} onClick_prevent_stop={props.onClick}>
    {children}
    <img className={style.picture__img} loading='lazy' alt={f.or(props.alt, 'Kuba • Caindo no meu melhor')} />
  </picture>
