import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (sofas) =>
  <Site className={style.sofas}>
    <Header className={style.sofas__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.sofas__title}>{sofas.title}</Title>
      <Banner className={style.sofas__banner} />
    </Fragment>
  </Site>
