import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props, i) =>
  <li className={style.feature}>
    <ui.Picture className={[style.feature__picture, style[`p${i}`]]}>
      <ui.Sources {...props} />
    </ui.Picture>
    <ui.Heading level='2' size='large' className={style.feature__heading}>{props.title}</ui.Heading>
    <ui.P className={style.feature__p}>{props.description}</ui.P>
  </li>
