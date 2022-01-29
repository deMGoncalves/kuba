import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <>
    <hgroup className={style.tamanho__hgroup}>
      <text.H2 className={style.tamanho__h2} master darker xs bold>Tamanho</text.H2>
      <text.P className={style.tamanho__p} master xxxs>Medida em polegadas do comprimento de desenvolvido do shape</text.P>
    </hgroup>
    <text.Data className={[style.tamanho__data, style.master]} master xs bold>{tamanho.master}</text.Data>
    <text.Data className={style.tamanho__data} master xs bold>{tamanho.slave}</text.Data>
  </>
