import h, { Fragment } from '@rex/h'
import Feature from '@rex/feature'
import Sources from '@rex/sources'
import text from '@rex/text'
import style from './style.css'

export default (props, i) =>
  <Feature className={style[`p${i}`]}>
    <Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <text.H2 size='large' className={style.feature__heading}>{props.title}</text.H2>
      <text.P className={style.feature__p}>{props.description}</text.P>
    </Fragment>
  </Feature>
