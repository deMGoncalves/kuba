import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (nose) =>
  <>
    <hgroup className={style.nose__hgroup}>
      <text.H2 className={style.nose__h2} master darker xs bold>Nose</text.H2>
      <text.P className={style.nose__p} master xxxs>Parte frontal inclinada do shape</text.P>
    </hgroup>
    <text.Data className={[style.nose__data, style.master]} master xxxs bold>{nose.master}</text.Data>
    <text.Data className={style.nose__data} master xxxs bold>{nose.slave}</text.Data>
  </>
