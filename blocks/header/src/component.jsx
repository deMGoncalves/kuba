import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style'

export default () =>
  <header className={style.header}>
    <Container className={style.header__container}>
      <Logo className={style.header__logo} />
    </Container>
  </header>
