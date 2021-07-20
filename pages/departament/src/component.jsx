import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Banner from './banner'
import schema from './schema'
import style from './style.css'

export default (departament) =>
  <Site className={style.departament}>
    <Header className={style.departament__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.departament__title}>{departament.title}</Title>
      <Breadcrumb {...schema.breadcrumb} className={style.departament__breadcrumb} />
      <Banner className={style.departament__banner} />
    </Fragment>
  </Site>
