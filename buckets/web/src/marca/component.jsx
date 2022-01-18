import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import container from '@kuba/container'
import Site from '@kuba/site'
import story from '@kuba/story'
import Descricao from './descricao'
import Origem from './origem'
import schema from './schema'
import Shelf from './shelf'
import style from './style'
import Thumbnail from './thumbnail'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <Title />
      <story.Section>
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
      </story.Section>
    </Fragment>
  </Site>
