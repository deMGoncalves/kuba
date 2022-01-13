import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <text.Strong className={style.marca} master lightest xxxs medium>{marca.nome}</text.Strong>
