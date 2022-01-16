import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <text.H2 className={style.laminas__p} master xxxs>{laminas.valor}</text.H2>
