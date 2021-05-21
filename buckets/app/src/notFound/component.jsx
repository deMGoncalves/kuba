import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import text from '@kuga/text'
import style from './style.css'

export default () =>
  <Site className={style.notFound}>
    <Fragment slot='main'>
      <text.H1 className={style.notFound__text} master darker largest>kuba (página nao encontrada)</text.H1>
    </Fragment>
  </Site>

