import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import link from '@kuba/link'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (cadeiras) =>
  <Site className={style.cadeiras}>
    <Header className={style.cadeiras__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.cadeiras__title}>{cadeiras.title}</Title>
      <Breadcrumb className={style.acessorios__breadcrumb}>
        <link.Master className={style.acessorios__link}>{cadeiras.title}</link.Master>
      </Breadcrumb>
      <Banner className={style.cadeiras__banner} />
    </Fragment>
  </Site>
