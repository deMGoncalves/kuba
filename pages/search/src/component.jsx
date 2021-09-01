import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import Filter from './filter'
import Shelf from './shelf'
import style from './style'

export default (search) =>
  <Site className={style.search}>
    <Header className={style.search__header} slot='header' />
    <Fragment slot='main'>
      <Title className={style.search__title}>{search.q}</Title>
      <Breadcrumb className={style.search__breadcrumb} />
      <Filter className={style.search__filter} />
      <Shelf className={style.search__shelf} />
    </Fragment>
  </Site>
