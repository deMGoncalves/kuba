import h, { Fragment } from '@kuba/h'
import Exploration from '@kuba/exploration'
import Hero from '@kuba/hero'
import Inspiration from '@kuba/inspiration'
import Shelf from '@kuba/shelf'
import Site from '@kuba/site'
import Workflow from '@kuba/workflow'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot'>
      <Hero className={style.home__hero} />
      <Exploration className={style.home__exploration} />
    </Fragment>
    <Fragment slot='warm'>
      <Workflow className={style.home__workflow} />
      <Inspiration className={style.home__inspiration} />
    </Fragment>
    <Fragment slot='cold'>
      <Shelf className={style.home__self} />
    </Fragment>
  </Site>
