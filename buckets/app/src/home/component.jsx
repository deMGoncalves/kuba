import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import text from '@kuga/text'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Fragment slot='main'>
      <text.H1 className={style.home__text} master darker largest>kuba</text.H1>
    </Fragment>
  </Site>
