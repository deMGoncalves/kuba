import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <section className={style.laminas}>
    <text.H2 className={style.laminas__h2} master darker md medium>Lâminas</text.H2>
    <text.P className={style.laminas__p} master xxxs>{laminas.valor}</text.P>
  </section>
