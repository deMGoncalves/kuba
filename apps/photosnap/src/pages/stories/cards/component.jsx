import h from '@rex/h'
import * as f from '@rex/f'
import * as c from '@components'
import style from './style.css'

export default (props) =>
  <figure className={[style.card, props.className]}>
    <c.Picture className={style.card__picture} alt={props.title}>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </c.Picture>
    <figcaption className={style.card__figcaption}>
      <data className={style.card__data} value={props.date}>{props.date}</data>
      <h2 className={style.card__h2}>{props.title}</h2>
      <p className={style.card__p}>by {props.author}</p>
      <c.LinkButton className={style.card__linkButton} color='inverse' href={props.url}>Read story</c.LinkButton>
    </figcaption>
  </figure>
