import h, { Fragment } from '@kuba/h'
import Filter from '@kuba/filter'
import Shelf from '@kuba/shelf'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import style from './style'

export default (search) =>
  <Site className={style.search}>
    <Fragment slot='hot'>
      <Title className={style.search__title}>{search.q}</Title>
      <Breadcrumb className={style.search__breadcrumb} />
      <Filter className={style.search__filter} />
    </Fragment>
    <Fragment slot='warm'>
      <Shelf className={style.search__shelf} />
    </Fragment>
  </Site>
