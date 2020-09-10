import h from '@rex/h'
import style from './style.css'

export default () =>
  <nav className={style.navigation}>
    <span className={style.navigation__logotipo}>logotipo</span>
    <ul className={style.navigation__list}>
      <li className={style.navigation__title}>Shared</li>
      <li><a className={style.navigation__link} href='#' title='link'>F</a></li>
      <li><a className={style.navigation__link} href='#' title='link'>H</a></li>
      <li><a className={[style.navigation__link, style.active]} href='#' title='link'>Hook</a></li>
      <li><a className={style.navigation__link} href='#' title='link'>Markup</a></li>
      <li><a className={style.navigation__link} href='#' title='link'>Radio</a></li>
      <li><a className={style.navigation__link} href='#' title='link'>Reset</a></li>
      <li><a className={style.navigation__link} href='#' title='link'>Router</a></li>
    </ul>
  </nav>
