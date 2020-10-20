import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props, i) =>
  <li className={style.feature}>
    <ui.Picture className={[style.feature__picture, style[`p${i}`]]}>
      <ui.Sources {...props} />
    </ui.Picture>
    <h2 className={style.feature__h2}>{props.title}</h2>
    <p className={style.feature__p}>{props.description}</p>
  </li>
