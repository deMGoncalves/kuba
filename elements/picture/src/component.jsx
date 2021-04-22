import h from '@kuba/h'
import style from './style.css'

export default (props, children) =>
  <picture {...props} className={[style.picture, props.className]}>
    {children}
    <img className={style.picture__img} loading='lazy' alt={props.alt} />
  </picture>
