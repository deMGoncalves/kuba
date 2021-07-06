import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import link from '@kuba/link'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (acessorios) =>
  <Site className={style.acessorios}>
    <Header className={style.acessorios__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.acessorios__title}>{acessorios.title}</Title>
      <Breadcrumb className={style.acessorios__breadcrumb}>
        <link.Master className={style.acessorios__link}>{acessorios.title}</link.Master>
      </Breadcrumb>
      <Banner className={style.acessorios__banner} />
    </Fragment>
  </Site>
