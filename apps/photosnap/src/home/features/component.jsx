import h, { Fragment, Repeat } from '@rex/h'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

const Feature = (props, i) =>
  <ui.Feature className={style[`p${i}`]}>
    <ui.Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <ui.Heading level='3' className={style.features__heading}>{props.title}</ui.Heading>
      <ui.P className={style.features__p}>{props.description}</ui.P>
    </Fragment>
  </ui.Feature>

export default () =>
  <ul className={style.features}>
    <Repeat iterator={schema} component={Feature} />
  </ul>
