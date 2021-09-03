import h, { Fragment } from '@kuba/h'
import Filter from '@kuba/filter'
import Lazy from '@kuba/lazy'
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
      <Lazy require={() => import('@kuba/shelf' /* webpackChunkName: "shelf" */)} />
    </Fragment>
  </Site>
