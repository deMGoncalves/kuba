import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.story, style[props.color], style[props.direction], props.className]}>
    <c.Picture className={style.story__picture} alt={props.title}>
      {children}
    </c.Picture>
    <figcaption className={style.story__figcaption}>
      <h1 className={[style.story__h1, style[props.color]]}>{props.title}</h1>
      <p className={[style.story__p, style[props.color]]}>{props.description}</p>
      <c.LinkButton className={style.story__linkButton} color={props.color} href={props.url}>Read story</c.LinkButton>
    </figcaption>
  </figure>
