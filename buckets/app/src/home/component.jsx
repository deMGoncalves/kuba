import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Hero from '@kuba/hero'
import Site from '@kuba/site'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Header className={style.home__header} slot='header' />
    <Fragment slot='main'>
      <Hero className={style.home__hero} />
    </Fragment>
  </Site>
