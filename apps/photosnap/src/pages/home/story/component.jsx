import h from '@rex/h'
import * as c from '@components'
import style from './style.css'

export default (props, children) =>
  <figure className={[style.story, props.className]}>
    <c.Picture className={style.story__picture} alt={props.title}>
      {children}
    </c.Picture>
    <figcaption className={style.story__figcaption}>
      <h1 className={style.story__h1}>{props.title}</h1>
      <p className={style.story__p}>{props.description}</p>
      <c.LinkButton className={style.story__linkButton} color='inverse' href={props.url}>Get in invite</c.LinkButton>
    </figcaption>
  </figure>
