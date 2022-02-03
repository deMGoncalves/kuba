import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Hero from './hero'
import Material from './material'
import Modelo from './modelo'
import Relacionado from './relacionado'
import style from './style'
import Variacao from './variacao'

export default () =>
  <Site className={style.shape__main}>
    <Fragment slot='main'>
      <Modelo />
      <Hero />
      <Descricao />
      <Variacao />
      <Especificacao />
      <Material />
      <Relacionado />
    </Fragment>
    <Breadcrumb />
  </Site>
