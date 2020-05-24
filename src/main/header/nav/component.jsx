import h from '@h'
import style from './style.css'

export default (attr) =>
  <nav className={[style.nav, attr.className]}>
    <a className={style.nav__link} href='./efeitos'>Efeitos</a>
    <a className={style.nav__link} href='./pedal-custom'>Pedal Custom</a>
    <a className={style.nav__link} href='./mod-kits'>Mod Kits</a>
    <a className={style.nav__link} href='./souvenier'>Souvenier</a>
  </nav>
