import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import schema from './schema'
import style from './style.css'

export default (acessorios) =>
  <Site className={style.acessorios}>
    <Header className={style.acessorios__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.acessorios__title}>{acessorios.title}</Title>
      <Breadcrumb {...schema.breadcrumb} className={style.acessorios__breadcrumb} />
      <Banner {...schema.banner} className={style.acessorios__banner} />
    </Fragment>
  </Site>
