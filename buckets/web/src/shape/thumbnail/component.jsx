import h from '@kuba/h'
import container from '@kuba/container'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import Compare from './compare'
import style from './style'

export default (thumbnail) =>
  <container.Section className={style.thumbnail}>
    <Figure className={style.thumbnail__figure} alt={thumbnail.alt} height='920' width='736'>
      <Show when={thumbnail.src}>
        <source srcSet={thumbnail.src} slot='sources' />
      </Show>
      <Compare />
    </Figure>
  </container.Section>
