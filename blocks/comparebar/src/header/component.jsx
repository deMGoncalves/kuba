import h from '@kuba/h'
import i18n from './i18n'
import style from './style'
import text from '@kuba/text'

export default () =>
  <header className={style.header}>
    <text.Strong className={style.header__strong} master darker xxxs medium>{i18n.title}</text.Strong>
    <text.P className={style.header__p} master darker xs bold>{i18n.description}</text.P>
  </header>
