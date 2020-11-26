import h from '@rex/h'
import Picture from '@rex/picture'
import style from './style.css'

export default (props, children) =>
  <li className={[style.feature, props.className]}>
    <Picture className={style.feature__picture}>
      {children.picture}
    </Picture>
    {children.caption}
  </li>
