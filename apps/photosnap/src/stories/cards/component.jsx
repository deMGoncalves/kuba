import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Story>
    <ui.Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <data className={style.card__data} value={props.date}>{props.date}</data>
      <h2 className={style.card__h2}>{props.title}</h2>
      <p className={style.card__p}>by {props.author}</p>
      <ui.Link className={style.card__link} {...props}>{props.link}</ui.Link>
    </Fragment>
  </ui.Story>
