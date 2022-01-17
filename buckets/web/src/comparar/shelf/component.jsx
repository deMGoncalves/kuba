import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (shelf) =>
  <>
    <story.Section className={style.shelf__section}>
      <container.Div className={style.shelf__div}>
        {shelf.thumbnail}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.marca}
        {shelf.modelo}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.descricao}
      </container.Div>
    </story.Section>
    <story.Section className={style.shelf__section}>
      <container.Div className={style.shelf__div}>
        {shelf.tamanho}
      </container.Div>
    </story.Section>
  </>
