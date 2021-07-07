import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (busca) =>
  <Site className={style.busca}>
    <Header className={style.busca__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.busca__title}>{busca.title}</Title>
      <Breadcrumb className={style.busca__breadcrumb} paths={busca.paths} />
    </Fragment>
  </Site>
