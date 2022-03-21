import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (tail) =>
  <tag.Master className={style.tail} onClick={() => tail.toggle()} selected:isTruthy={tail.selected} darker medium>
    Tail
  </tag.Master>
