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
          </section>
          <section className={[style.shape__section, style.specification]}>
            <hgroup className={style.shape__hgroup}>
              {shape.marca}
              {shape.modelo}
            </hgroup>
            {shape.descricao}
            {shape.especificacao}
            {shape.material}
            {shape.laminas}
          </section>
        </container.Div>
      </story.Section>
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
