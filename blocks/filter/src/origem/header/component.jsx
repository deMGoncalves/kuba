import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs medium>Origem</text.Strong>
    <text.P className={style.header__p} master darker xs bold>Gringo ou Nacional, qual você prefere?</text.P>
  </header>
