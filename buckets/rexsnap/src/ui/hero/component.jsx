import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.hero, style[props.color], style[props.direction], props.className]}>
    <ui.Picture className={style.hero__picture} alt={props.alt}>
      {children.figure}
    </ui.Picture>
    <figcaption className={style.hero__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
