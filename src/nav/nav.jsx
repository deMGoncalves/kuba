import h from '@h'
import Container from '@/container'
import style from './style.css'

const component = () =>
  <nav className={style.nav}>
    <Container>
      <ul>
        <li><a className={style.nav__link} href='/sobre'>Sobre</a></li>
        <li><a className={style.nav__link} href='/contato'>Contato</a></li>
      </ul>
    </Container>
  </nav>

export default component
