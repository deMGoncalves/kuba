import h from '@h'
import * as f from '@f'
import style from './style.css'

export default (attr, child) =>
  <picture className={[style.picture, attr.className]}>
    { child }
    <img className={style.picture__img} loading='lazy' alt={f.or(attr.alt, 'JRMod & Chutando lata pedals')} />
  </picture>
