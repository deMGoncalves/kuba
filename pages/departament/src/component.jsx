import h, { Fragment } from '@kuba/h'
import Banner from '@kuba/banner'
import Navigation from '@kuba/navigation'
import Shelf from '@kuba/shelf'
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
      <Navigation className={style.departament__navigation} />
    </Fragment>
    <Fragment slot='warm'>
      <Shelf className={style.departament__shelf} />
    </Fragment>
  </Site>
