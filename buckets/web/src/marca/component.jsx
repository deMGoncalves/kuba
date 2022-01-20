import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import Descricao from './descricao'
import Origem from './origem'
import Shelf from './shelf'
import style from './style'
import Thumbnail from './thumbnail'
import Title from './title'

export default (marca) =>
  <Site>
    <Fragment slot='hot'>
      <Title />
      <container.div className={style.marca__div}>
        <section className={[style.marca__section, style.marca]}>
          <Thumbnail />
          <Origem />
          <Descricao />
        </section>
        <section className={[style.marca__section, style.shelf]}>
          <Shelf />
        </section>
      </container.div>
    </Fragment>
    <Fragment slot='footer'>
      {marca.breadcrumb}
    </Fragment>
  </Site>
