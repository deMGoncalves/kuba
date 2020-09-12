import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.banner, style[props.color], style[props.direction], props.className]}>
    <c.Picture className={style.banner__picture} alt={props.title}>
      {children}
    </c.Picture>
    <figcaption className={style.banner__figcaption}>
      <h1 className={[style.banner__h1, style[props.color]]}>{props.title}</h1>
      <p className={[style.banner__p, style[props.color]]}>{props.description}</p>
      <c.LinkButton className={style.banner__linkButton} color={props.color} href={props.url}>Read story</c.LinkButton>
    </figcaption>
  </figure>
