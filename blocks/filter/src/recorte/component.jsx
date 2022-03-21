import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (recorte) =>
  <tag.Master className={style.recorte} onClick={() => recorte.toggle()} selected:isTruthy={recorte.selected} darker medium>
    Cut-outs
  </tag.Master>
