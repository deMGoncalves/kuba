import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style'

export default (props) =>
  <header className={[style.header, props.className]}>
    <Container className={style.header__container}>
      <Logo />
    </Container>
  </header>
