import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import Filter from './filter'
import Shelf from './shelf'
import style from './style'

export default (category) =>
  <Site className={style.category}>
    <Header className={style.category__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.category__title}>{category.title}</Title>
      <Breadcrumb className={style.category__breadcrumb} />
      <Filter className={style.category__filter} />
      <Shelf className={style.category__shelf} />
    </Fragment>
  </Site>
