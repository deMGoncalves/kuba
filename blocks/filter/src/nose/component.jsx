import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (nose) =>
  <tag.Master className={style.nose} onClick={() => nose.toggle()} selected:isTruthy={nose.selected} darker medium>
    Nose
  </tag.Master>
