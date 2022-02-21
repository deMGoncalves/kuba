import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (simetrico) =>
  <tag.Master className={style.simetrico} onClick={() => simetrico.toggle()} selected:isTruthy={simetrico.selected} darker medium>
    Simetrico
  </tag.Master>
