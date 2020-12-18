import h from '@rex/htmlparser'
import Button from '@rex/button'
import Link from '@rex/link'
import Logo from '@rex/logo'
import style from './style.css'

export default (header) =>
  <header className={style.header}>
    <div className={style.header__container}>
      <Logo className={style.header__logo} />
      <button className={[style.header__toggle, style[header.status]]} onClick_prevent_stop={() => header.toggle()}>Menu</button>
      <nav className={style.header__nav}>
        <Link className={style.header__link} href='./stories'>Stories</Link>
        <Link className={style.header__link} href='./features'>Features</Link>
        <Link className={style.header__link} href='./pricing'>Pricing</Link>
      </nav>
      <Button className={style.header__button} href='/'>Get in invite</Button>
    </div>
  </header>
