import h, { Fragment, Hide, Show } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (option) =>
  <>
    <Show if={option.selected}>
      <tag.Master className={[style.option, style.selected]} onClick={() => option.unselect()}>{option.display}</tag.Master>
    </Show>
    <Hide if={option.selected}>
      <tag.Master className={style.option} onClick={() => option.select()}>{option.display}</tag.Master>
    </Hide>
  </>
