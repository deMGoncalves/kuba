import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero {...props}>
    <ui.Sources slot='figure' {...props} />
    <Fragment slot='caption'>
      <ui.Heading className={style.banner__heading} {...props}>{props.title}</ui.Heading>
      <p className={style.banner__p}>{props.description}</p>
    </Fragment>
  </ui.Hero>
