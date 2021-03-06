import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style.css'

export default (props, children) =>
  <div {...props} className={[style.box, props.className]}>
    <figure className={style.box__figure}>
      <Picture className={style.box__picture}>
        {children.sources}
      </Picture>
      <figcaption className={style.box__figcaption}>
        {children.caption}
      </figcaption>
    </figure>
  </div>
