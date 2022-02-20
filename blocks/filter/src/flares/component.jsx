import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (flares) =>
  <tag.Master className={style.flares} onClick={() => flares.toggle()} selected:isTruthy={flares.selected} darker medium>
    Whell Flares
  </tag.Master>
