import h from '@h'
import style from './style.css'

export default (attr) =>
  <nav className={[style.nav, attr.className]}>
    <a className={style.nav__a} href='./efeitos'>Efeitos</a>
    <a className={style.nav__a} href='./pedal-custom'>Pedal Custom</a>
    <a className={style.nav__a} href='./mod-kits'>Mod Kits</a>
    <a className={style.nav__a} href='./souvenier'>Souvenier</a>
  </nav>
