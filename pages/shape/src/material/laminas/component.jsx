import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (laminas) =>
  <text.P uid='laminas' className={style.laminas} master xxxs>{laminas.valor}</text.P>
