import h from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'

export default (thumbnail) =>
  <Picture className={style.thumbnail} onClick={() => thumbnail.zoom()} alt={thumbnail.alt} height='920' width='736'>
    <Show when={thumbnail.src}>
      <source srcSet={thumbnail.src} />
    </Show>
  </Picture>
