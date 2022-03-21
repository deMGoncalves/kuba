import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (pro) =>
  <tag.Master className={style.pro} onClick={() => pro.toggle()} selected:isTruthy={pro.selected} darker medium>
    Pro Model
  </tag.Master>
