import h, { Fragment } from '@kuba/h'
import Exploration from '@kuba/exploration'
import Hero from '@kuba/hero'
import Lazy from '@kuba/lazy'
import Report from '@kuba/report'
import Sandbox from '@kuba/sandbox'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot'>
      <Hero className={style.home__hero} />
      <Sandbox require={() => new Worker(new URL('@kuba/hero', import.meta.url /* WebpackChunckName: 'hero' */))} />
      <Report className={style.home__report} />
      <Exploration className={style.home__exploration} />
    </Fragment>
    <Fragment slot='warm'>
      <Lazy require={() => import('@kuba/workflow' /* webpackChunkName: "workflow" */)} />
      <Lazy require={() => import('@kuba/inspiration' /* webpackChunkName: "inspiration" */)} />
    </Fragment>
    <Fragment slot='cold'>
      <Lazy require={() => import('@kuba/shelf' /* webpackChunkName: "shelf" */)} />
    </Fragment>
  </Site>
