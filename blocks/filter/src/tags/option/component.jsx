import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import tag from '@kuba/tag'
import style from './style'

export default (option) =>
  <>
    <Show when={option.selected}>
      <tag.Master className={[style.option, style.selected]} onClick={() => option.unselect()}>{option.display}</tag.Master>
    </Show>
    <Hide when={option.selected}>
      <tag.Master className={style.option} onClick={() => option.select()}>{option.display}</tag.Master>
    </Hide>
  </>
