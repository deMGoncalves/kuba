import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot' />
  </Site>
