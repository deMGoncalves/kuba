import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (concave) =>
  <tag.Master className={style.concave} onClick={() => concave.toggle()} selected:isTruthy={concave.selected} darker medium>
    Concave
  </tag.Master>
