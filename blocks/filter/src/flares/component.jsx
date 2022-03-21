import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (flares) =>
  <tag.Master className={style.flares} onClick={() => flares.toggle()} selected:isTruthy={flares.selected} darker medium>
    Whell Flares
  </tag.Master>
