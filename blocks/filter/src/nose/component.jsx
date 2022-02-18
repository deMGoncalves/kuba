import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (nose) =>
  <tag.Master className={style.nose} onClick={() => nose.toggle()} selected:isTruthy={nose.selected} darker medium>
    Nose
  </tag.Master>
