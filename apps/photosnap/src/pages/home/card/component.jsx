import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.card, style[props.color], style[props.direction], props.className]}>
    <c.Picture className={style.card__picture} alt={props.title}>
      {children}
    </c.Picture>
    <figcaption className={style.card__figcaption}>
      <h1 className={[style.card__h1, style[props.color]]}>{props.title}</h1>
      <p className={[style.card__p, style[props.color]]}>{props.author}</p>
      <c.LinkButton className={style.card__linkButton} color={props.color} href={props.url}>Read story</c.LinkButton>
    </figcaption>
  </figure>
