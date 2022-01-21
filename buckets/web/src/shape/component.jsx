import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import Related from '@kuba/related'
import Site from '@kuba/site'
import style from './style'

export default (shape) =>
  <Site>
    <Fragment slot='main'>
      <container.Div className={style.shape__div}>
        <section className={[style.shape__section, style.thumbnail]}>
          {shape.thumbnail}
        </section>
        <section className={[style.shape__section, style.specification]}>
          <header className={style.shape__header}>
            {shape.marca}
            {shape.modelo}
            {shape.origem}
          </header>
          {shape.descricao}
          {shape.especificacao}
          {shape.comparebutton}
          {shape.laminas}
          {shape.material}
        </section>
      </container.Div>
      <Related />
    </Fragment>
    {shape.breadcrumb}
  </Site>
