import h from '@kuba/h'
import style from './style'

export default (cookiebar) =>
  <aside className={style.cookiebar}>
    {cookiebar.step}
  </aside>
