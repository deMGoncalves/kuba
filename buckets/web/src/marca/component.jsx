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
        <container.Section className={style.marca}>
          <container.Section className={style.marca__thumbnail}>
            {marca.thumbnail}
            {marca.descricao}
            {marca.link}
            {marca.origem}
          </container.Section>
          {marca.shapes}
        </container.Section>
      </story.Section>
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
