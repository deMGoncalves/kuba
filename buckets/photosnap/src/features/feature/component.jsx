import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props, i) =>
  <ui.Feature className={style[`p${i}`]}>
    <ui.Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <ui.Heading level='2' size='large' className={style.feature__heading}>{props.title}</ui.Heading>
      <ui.P className={style.feature__p}>{props.description}</ui.P>
    </Fragment>
  </ui.Feature>
