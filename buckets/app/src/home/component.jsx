import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Summary from '@kuba/summary'
import Zone from '@kuba/zone'
import Definition from './definition'
import Description from './description'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Fragment slot='main'>
      <Definition className={style.home__definition} />
      <Summary className={style.home__summary} iterator={schema} />
      <Zone className={style.home__zone}>
        <Description className={style.home__description} />
      </Zone>
    </Fragment>
  </Site>
