import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (data) =>
  <article className={style.descricao}>
    <text.H1 bold master darkest>{data.nome}</text.H1>
    <text.P xxs>{data.descricao}</text.P>
  </article>
