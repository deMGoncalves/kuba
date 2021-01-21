import h from '@rex/htmlparser'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <picture {...props} className={[style.picture, props.className]}>
    {children}
    <img className={style.picture__img} loading='lazy' alt={f.or(props.alt, 'Kuba • Caindo no meu melhor')} />
  </picture>
