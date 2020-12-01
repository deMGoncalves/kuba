import h, { Fragment } from '@rex/h'
import Feature from '@rex/feature'
import Sources from '@rex/sources'
import text from '@rex/text'
import style from './style.css'

export default (props, i) =>
  <Feature className={style[`p${i}`]}>
    <Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <text.H3 className={style.features__heading}>{props.title}</text.H3>
      <text.P className={style.features__p}>{props.description}</text.P>
    </Fragment>
  </Feature>
