import h from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'

export default (thumbnail) =>
  <Picture className={style.thumbnail} onClick={() => thumbnail.zoom()} alt={thumbnail.alt} width='337.033' height='421.283'>
    <Show when={thumbnail.src}>
      <source srcSet={thumbnail.src} />
    </Show>
  </Picture>
