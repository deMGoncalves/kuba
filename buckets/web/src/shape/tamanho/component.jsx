import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <>
    <text.Strong className={style.tamanho__strong} master darker xxs medium>Tamanho</text.Strong>
    <text.Span className={style.tamanho__span} master xxxs>{tamanho.valor}</text.Span>
  </>
