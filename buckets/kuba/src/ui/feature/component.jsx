import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (props, children) =>
  <li className={[style.feature, props.className]}>
    <ui.Picture className={style.feature__picture}>
      {children.picture}
    </ui.Picture>
    {children.caption}
  </li>
