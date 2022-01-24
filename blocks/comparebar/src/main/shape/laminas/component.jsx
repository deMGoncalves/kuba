import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <text.P className={style.laminas__p} master xxxs>{laminas.valor}</text.P>
