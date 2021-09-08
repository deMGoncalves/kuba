import h, { Fragment } from '@kuba/h'
import Hero from '@kuba/hero'
import Lazy from '@kuba/lazy'
import Site from '@kuba/site'
import style from './style'

export default () =>
  <Site className={style.home}>
    <Fragment slot='hot'>
      <Hero className={style.home__hero} />
      <Lazy require={() => import('@kuba/exploration' /* webpackChunkName: "exploration" */)} />
    </Fragment>
    <Fragment slot='warm'>
      <Lazy require={() => import('@kuba/workflow' /* webpackChunkName: "workflow" */)} />
      <Lazy require={() => import('@kuba/inspiration' /* webpackChunkName: "inspiration" */)} />
    </Fragment>
    <Fragment slot='cold'>
      <Lazy require={() => import('@kuba/shelf' /* webpackChunkName: "shelf" */)} />
    </Fragment>
  </Site>
