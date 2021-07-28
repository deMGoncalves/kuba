import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style'

export default (props, children) =>
  <div {...props} className={[style.box, props.className]}>
    <figure className={style.box__figure}>
      <Picture className={style.box__picture} alt={props.alt}>
        {children.sources}
      </Picture>
      <figcaption className={style.box__figcaption}>
        {children.caption}
      </figcaption>
    </figure>
  </div>
