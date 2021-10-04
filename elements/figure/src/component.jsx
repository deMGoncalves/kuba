import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (props, children) =>
  <figure {...props} className={[style.figure, props.className]}>
    <Picture className={style.figure__picture} alt={props.alt}>
      {children.sources}
    </Picture>
    <figcaption className={style.figure__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
