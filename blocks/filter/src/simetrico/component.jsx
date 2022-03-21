import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (simetrico) =>
  <tag.Master className={style.simetrico} onClick={() => simetrico.toggle()} selected:isTruthy={simetrico.selected} darker medium>
    Simetrico
  </tag.Master>
