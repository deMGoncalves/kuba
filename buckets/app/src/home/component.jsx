import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Zone from '@kuba/zone'
import Definition from './definition'
import Description from './description'
import Summary from './summary'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Definition className={style.home__definition} />
      <Summary className={style.home__summary} />
      <Zone className={style.home__zone}>
        <Description className={style.home__description} />
      </Zone>
    </Fragment>
  </Site>
