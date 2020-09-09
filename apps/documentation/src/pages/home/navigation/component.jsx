import h from '@rex/h'
import style from './style.css'

export default () =>
  <nav className={style.navigation}>
    <ul className={style.navigationList}>
      <li>
        <a className={style.navigationLink} href='#' title='link'>
          Menu Rex 1
        </a>
      </li>
      <li><a className={style.navigationLink} href='#' title='link'>Menu Rex 2</a></li>
      <li><a className={[style.navigationLink, style.active]} href='#' title='link'>Menu Rex 3</a></li>
      <li><a className={style.navigationLink} href='#' title='link'>Menu Rex 4</a></li>
    </ul>
  </nav>
