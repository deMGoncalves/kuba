import h from '@rex/h'
import * as f from '@rex/f'
import * as c from '@components'
import style from './style.css'

export default (props) =>
  <figure className={[style.banner, props.className]}>
    <c.Picture className={style.banner__picture} alt={props.title}>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </c.Picture>
    <figcaption className={style.banner__figcaption}>
      <hgroup>
        <h2 className={style.banner__h2}>{props.subtitle}</h2>
        <h1 className={style.banner__h1}>{props.title}</h1>
      </hgroup>
      <p className={style.banner__p}>{props.date} by {props.author}</p>
      <p className={style.banner__p}>{props.description}</p>
      <c.LinkButton className={style.banner__linkButton} color='inverse' href={props.url}>Read story</c.LinkButton>
    </figcaption>
  </figure>
