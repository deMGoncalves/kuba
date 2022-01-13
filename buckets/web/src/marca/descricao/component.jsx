import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (descricao) =>
  <text.P className={style.descricao} master xxxs>{descricao.valor}</text.P>
