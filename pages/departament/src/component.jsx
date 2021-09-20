import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Lazy from '@kuba/lazy'
import Navigation from '@kuba/navigation'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import style from './style'

export default (departament) =>
  <Site className={style.departament}>
    <Fragment slot='hot'>
      <Title className={style.departament__title}>{departament.title}</Title>
      <Breadcrumb className={style.departament__breadcrumb} />
      <Banner className={style.departament__banner} />
      <Navigation className={style.departament__navigation} departament={departament.id} />
    </Fragment>
    <Fragment slot='warm'>
      <Lazy require={() => import('@kuba/shelf' /* webpackChunkName: "shelf" */)} />
    </Fragment>
  </Site>
