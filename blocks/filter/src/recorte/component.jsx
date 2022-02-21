import h, { Fragment } from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (recorte) =>
  <tag.Master className={style.recorte} onClick={() => recorte.toggle()} selected:isTruthy={recorte.selected} darker medium>
    Cut-outs
  </tag.Master>
