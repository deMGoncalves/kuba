import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs medium>Tipo</text.Strong>
    <text.P className={style.header__p} master darker xs bold>Que tipo de shape é você quer?</text.P>
  </header>
