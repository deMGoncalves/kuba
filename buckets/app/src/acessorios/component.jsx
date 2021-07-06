import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Header from '@kuba/header'
import Site from '@kuba/site'
import style from './style.css'

export default () =>
  <Site className={style.acessorios}>
    <Header className={style.acessorios__header} slot='header' />
    <Fragment slot='main'>
      <Banner className={style.acessorios__banner} />
    </Fragment>
  </Site>
