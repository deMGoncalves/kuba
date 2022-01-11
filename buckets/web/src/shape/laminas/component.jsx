import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <section className={style.laminas}>
    <text.Strong className={style.laminas__strong} master darker sm medium>Lâminas</text.Strong>
    <text.P className={style.laminas__p} master xxxs>{laminas.valor}</text.P>
  </section>
