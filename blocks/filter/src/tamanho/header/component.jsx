import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs medium>Tamanho</text.Strong>
    <text.P className={style.header__p} master darker xs bold>Qual tamanho de shape você prefere?</text.P>
  </header>
