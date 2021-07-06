import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import style from './style.css'

export default (acessorios) =>
  <Site className={style.acessorios}>
    <Header className={style.acessorios__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.acessorios__title}>{acessorios.title}</Title>
      <Banner className={style.acessorios__banner} />
    </Fragment>
  </Site>
