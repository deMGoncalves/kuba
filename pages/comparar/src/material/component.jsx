import h, { Fragment } from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (material) =>
  <>
    <text.P className={style.material} master xxxs>{material.master}</text.P>
    <text.P className={[style.material, style.slave]} master xxxs>{material.slave}</text.P>
  </>
