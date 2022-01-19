import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import story from '@kuba/story'
import style from './style'

export default (shape) =>
  <Site>
    <Fragment slot='hot'>
      {shape.breadcrumb}
      <story.Section>
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
      </story.Section>
    </Fragment>
    <Fragment slot='warm'>
      {shape.related}
    </Fragment>
  </Site>
