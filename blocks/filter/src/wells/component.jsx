import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (wells) =>
  <tag.Master className={style.wells} onClick={() => wells.toggle()} selected:isTruthy={wells.selected} darker medium>
    Whell Wells
  </tag.Master>
