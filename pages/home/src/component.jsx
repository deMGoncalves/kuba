import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Zone from '@kuba/zone'
import Exploration from './exploration'
import Hero from './hero'
import Inspiration from './inspiration'
import Workflow from './workflow'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Hero className={style.home__hero} />
      <Exploration className={style.home__exploration} />
      <Zone className={style.home__zone}>
        <Workflow className={style.home__workflow} />
        <Inspiration className={style.home__inspiration} />
      </Zone>
    </Fragment>
  </Site>
