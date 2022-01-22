import h from '@kuba/h'
import container from '@kuba/container'
import echo from '@kuba/echo'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import Compare from './compare'
import style from './style'

export default (thumbnail) =>
  <container.Section className={style.thumbnail}>
    <Figure className={style.thumbnail__figure} alt={thumbnail.alt} height='920' width='736' onClick={() => echo.emit('zoom:open')}>
      <Show when={thumbnail.src}>
        <source srcSet={thumbnail.src} slot='sources'/>
      </Show>
    </Figure>
    <Compare />
  </container.Section>
