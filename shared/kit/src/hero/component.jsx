import h from '@rex/h'
import Picture from '@rex/kit/src/picture'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.hero, style[props.color], style[props.direction], props.className]}>
    <Picture className={style.hero__picture} alt={props.alt}>
      {children.figure}
    </Picture>
    <figcaption className={style.hero__figcaption}>
      {children.caption}
    </figcaption>
  </figure>
