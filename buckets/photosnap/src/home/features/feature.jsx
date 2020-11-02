import h, { Fragment } from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (props, i) =>
  <ui.Feature className={style[`p${i}`]}>
    <ui.Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <ui.Heading level='3' className={style.features__heading}>{props.title}</ui.Heading>
      <ui.P className={style.features__p}>{props.description}</ui.P>
    </Fragment>
  </ui.Feature>
