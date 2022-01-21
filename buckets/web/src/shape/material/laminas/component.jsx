import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (laminas) =>
  <text.P uid='laminas' className={style.laminas} master xxxs>{laminas.valor}</text.P>
