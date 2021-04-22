import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style.css'

export default (props) =>
  <header {...props} className={[style.header, props.className]}>
    <Container className={style.header__container}>
      <Logo className={style.header__logo} />
    </Container>
  </header>
