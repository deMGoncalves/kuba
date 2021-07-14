import h, { Fragment } from '@kuba/h'
import Exploration from '@kuba/exploration'
import Header from '@kuba/header'
import Hero from '@kuba/hero'
import Lazy from '@kuba/lazy'
import Site from '@kuba/site'
import Zone from '@kuba/zone'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Hero className={style.home__hero} />
      <Exploration className={style.home__exploration} />
      <Zone>
        <Lazy className={style.home__inspiration} require={() => import('@kuba/inspiration' /* webpackChunkName: "inspiration" */)} />
      </Zone>
    </Fragment>
  </Site>
