import h from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <figure className={[style.card, props.className]}>
    <ui.Picture className={style.card__picture} alt={props.title}>
      <ui.Sources {...props} />
    </ui.Picture>
    <figcaption className={style.card__figcaption}>
      <ui.Heading level='2' {...props}>{props.title}</ui.Heading>
      <ui.P {...props}>by {props.author}</ui.P>
      <ui.Link className={style.card__link} icon='arrow' {...props}>Read story</ui.Link>
    </figcaption>
  </figure>
