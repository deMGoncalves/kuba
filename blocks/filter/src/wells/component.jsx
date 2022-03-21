import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (wells) =>
  <tag.Master className={style.wells} onClick={() => wells.toggle()} selected:isTruthy={wells.selected} darker medium>
    Whell Wells
  </tag.Master>
