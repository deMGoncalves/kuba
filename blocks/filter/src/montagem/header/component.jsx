import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs medium>Flex</text.Strong>
    <text.P className={style.header__p} master darker xs bold>Escolha a maneira como o truck é anexado ao shape</text.P>
  </header>
