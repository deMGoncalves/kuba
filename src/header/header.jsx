import h from '@h'
import Container from '../container'
import RexJS from './rex-jx.png'
import style from './style.css'

const component = () =>
  <header className={style.header} itemScope itemType='https://schema.org/Organization'>
    <Container>
      <a className={style.header__link} href='/' itemProp='url'>
        <img className={style.header__logo} src={RexJS} alt='Rex.JS' itemProp='logo' />
      </a>
      <div className={style.header__definition}>
        <h1 className={style.header__name} itemProp='name'>Rex.JS</h1>
        <p className={style.header__description} itemProp='description'>Simples, pequeno e imperfeito · uma visão além da programação...</p>
      </div>
    </Container>
  </header>

export default component
