import h from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <figure className={[style.banner, style[props.color], style[props.direction], props.className]}>
    <ui.Picture className={style.banner__picture} alt={props.title}>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </ui.Picture>
    <figcaption className={style.banner__figcaption}>
      <h1 className={[style.banner__h1, style[props.color]]}>{props.title}</h1>
      <p className={[style.banner__p, style[props.color]]}>{props.description}</p>
      <ui.LinkButton className={style.banner__linkButton} color={props.color} href={props.url}>Read story</ui.LinkButton>
    </figcaption>
  </figure>
