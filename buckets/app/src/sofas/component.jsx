import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import link from '@kuba/link'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (sofas) =>
  <Site className={style.sofas}>
    <Header className={style.sofas__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.sofas__title}>{sofas.title}</Title>
      <Breadcrumb className={style.acessorios__breadcrumb}>
        <link.Master className={style.acessorios__link}>{sofas.title}</link.Master>
      </Breadcrumb>
      <Banner className={style.sofas__banner} />
    </Fragment>
  </Site>
