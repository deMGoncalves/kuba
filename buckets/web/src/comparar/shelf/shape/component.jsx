import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import story from '@kuba/story'
import style from './style'

export default (shape) =>
  <Figure className={style.shape}>
    <Show when={shape.thumbnail}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Show>
    <Fragment slot='caption'>
      {shape.tamanho}
      {shape.modelo}
      <story.Section className={style.shape__ficha}>
        {shape.ficha}
      </story.Section>
    </Fragment>
  </Figure>
