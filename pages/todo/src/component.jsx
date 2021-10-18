import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site className={style.todo}>
    <Fragment slot='hot'>
      <Header className={style.todo__title} />
    </Fragment>
  </Site>
