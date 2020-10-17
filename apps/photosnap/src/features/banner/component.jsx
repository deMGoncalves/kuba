import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero color='inverse' direction='reverse'>
    <ui.Sources slot='figure' iterator={props.sources} />
    <Fragment slot='caption'>
      <h1 className={style.banner__h1}>{props.title}</h1>
      <p className={style.banner__p}>{props.description}</p>
    </Fragment>
  </ui.Hero>
