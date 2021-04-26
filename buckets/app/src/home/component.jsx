import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Cite from './cite'
import Description from './description'
import Summary from './summary'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Cite className={style.home__cite} />
      <Summary className={style.home__summary} />
      <Description className={style.home__description} />
    </Fragment>
  </Site>
