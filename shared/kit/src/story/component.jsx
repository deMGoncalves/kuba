import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.story, props.className]}>
    <ui.Picture className={style.story__picture} alt={props.title}>
      {children.picture}
    </ui.Picture>
    <figcaption className={style.story__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
