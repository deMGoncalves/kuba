import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (concave) =>
  <tag.Master className={style.concave} onClick={() => concave.toggle()} selected:isTruthy={concave.selected} darker medium>
    Concave
  </tag.Master>
