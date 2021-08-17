import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (props, children) =>
  <figure {...props} className={[style.bubble, props.className]}>
    <Picture className={style.bubble__picture} alt={props.alt}>
      {children.sources}
    </Picture>
    <figcaption className={style.bubble__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
