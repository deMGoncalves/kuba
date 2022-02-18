import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (tail) =>
  <tag.Master className={style.tail} onClick={() => tail.toggle()} selected:isTruthy={tail.selected} darker medium>
    Tail
  </tag.Master>
