import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import container from '@kuba/container'
import Site from '@kuba/site'
import story from '@kuba/story'
import schema from './schema'
import style from './style'

export default (shape) =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <story.Section>
        <container.Div className={style.shape__div}>
          <section className={[style.shape__section, style.thumbnail]}>
            {shape.thumbnail}
            {shape.creditos}
          </section>
          <section className={[style.shape__section, style.specification]}>
            <header className={style.shape__header}>
              {shape.marca}
              {shape.modelo}
              {shape.origem}
            </header>
            {shape.descricao}
            {shape.especificacao}
            {shape.comparar}
            {shape.laminas}
            {shape.material}
          </section>
        </container.Div>
      </story.Section>
    </Fragment>
    <Fragment slot='warm'>
      {shape.related}
    </Fragment>
  </Site>
