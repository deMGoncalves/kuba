import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (material) =>
  <>
    <hgroup className={style.material__hgroup}>
      <text.H2 className={style.material__h2} master darker xs bold>Material</text.H2>
    </hgroup>
    <text.P className={[style.material__p, style.master]} master xxxs>{material.master}</text.P>
    <text.P className={style.material__p} master xxxs>{material.slave}</text.P>
  </>
