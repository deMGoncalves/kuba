import h from '@rex/h'
import Picture from '@rex/picture'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.story, props.className]}>
    <Picture className={style.story__picture} alt={props.title}>
      {children.picture}
    </Picture>
    <figcaption className={style.story__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
