import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import container from '@kuba/container'
import Site from '@kuba/site'
import story from '@kuba/story'
import schema from './schema'
import style from './style'

export default (marca) =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <story.Section>
        <container.div className={style.marca__div}>
          <section className={[style.marca__section, style.marca]}>
            {marca.thumbnail}
            {marca.descricao}
            {marca.link}
            {marca.origem}
          </section>
          <section className={[style.marca__section, style.shelf]}>
            {marca.shapes}
          </section>
        </container.div>
      </story.Section>
    </Fragment>
  </Site>
