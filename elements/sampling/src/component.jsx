import h from '@kuba/h'
import Picture from '@kuba/picture'
import style from './style.css'

export default (props, children) =>
  <figure {...props} className={[style.sampling, props.className]}>
    <Picture className={style.sampling__picture}>
      {children.source}
    </Picture>
    <figcaption className={style.sampling__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
