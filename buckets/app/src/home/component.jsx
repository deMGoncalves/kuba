import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import Summary from '@kuba/summary'
import Zone from '@kuba/zone'
import Definition from './definition'
import Description from './description'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Fragment slot='main'>
      <Story className={style.home__story}>
        <Definition className={style.home__definition} />
      </Story>
      <Story className={style.home__story}>
        <Summary className={style.home__summary} iterator={schema} />
      </Story>
      <Zone className={style.home__zone}>
        <Story className={style.home__story}>
          <Description className={style.home__description} />
        </Story>
      </Zone>
    </Fragment>
  </Site>
