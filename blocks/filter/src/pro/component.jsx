import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (pro) =>
  <tag.Master className={style.pro} onClick={() => pro.toggle()} selected:isTruthy={pro.selected} darker medium>
    Pro Model
  </tag.Master>
