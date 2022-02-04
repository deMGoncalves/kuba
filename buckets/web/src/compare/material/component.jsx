import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <>
    <text.P className={style.material} master xxxs>{material.master}</text.P>
    <text.P className={[style.material, style.slave]} master xxxs>{material.slave}</text.P>
  </>
