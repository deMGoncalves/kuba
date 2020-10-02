import h from '@rex/h'
import Picture from '@rex/kit/src/picture'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.banner, style[props.color], style[props.direction], props.className]}>
    <Picture className={style.banner__picture} alt={props.alt}>
      {children.source}
    </Picture>
    <figcaption className={style.banner__figcaption}>
      {children.title}
      {children.description}
      {children.link}
    </figcaption>
  </figure>
