import h from '@kuba/h'
import Picture from '@kuba/picture'
import Show from '@kuba/show'
import style from './style'

export default (picture) =>
  <Picture className={style.picture} onClick={() => picture.zoom()} alt={picture.alt} height='920' width='736'>
    <Show when={picture.src}>
      <source srcSet={picture.src} />
    </Show>
  </Picture>
