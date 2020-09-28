import h from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <figure className={[style.card, props.className]}>
    <ui.Picture className={style.card__picture} alt={props.title}>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </ui.Picture>
    <figcaption className={style.card__figcaption}>
      <h2 className={style.card__h2}>{props.title}</h2>
      <p className={style.card__p}>by {props.author}</p>
      <ui.LinkButton className={style.card__linkButton} color='inverse' href={props.url}>Read story</ui.LinkButton>
    </figcaption>
  </figure>
