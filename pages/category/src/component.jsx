import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import style from './style'

export default (acessorios) =>
  <Site className={style.acessorios}>
    <Header className={style.acessorios__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.acessorios__title}>{acessorios.title}</Title>
      <Breadcrumb className={style.acessorios__breadcrumb} />
    </Fragment>
  </Site>
