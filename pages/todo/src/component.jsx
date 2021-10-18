import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot'>
      <Header className={style.home__title} />
    </Fragment>
  </Site>
