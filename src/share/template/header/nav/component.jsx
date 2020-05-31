import h from '@h'
import style from './style.css'

export default () =>
  <nav className={style.nav}>
    <a className={style.nav__a} href='./modificados'>modificados</a>
    <a className={style.nav__a} href='./custom-shop'>custom shop</a>
    <a className={style.nav__a} href='./kits'>kits</a>
    <a className={style.nav__a} href='./souvenier'>souvenier</a>
  </nav>
