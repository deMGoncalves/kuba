import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import text from '@kuba/text'
import Nav from './nav'
import Social from './social'
import style from './style.css'

export default (props) =>
  <footer {...props} className={[style.footer, props.className]}>
    <Container className={style.footer__container}>
      <div className={style.footer__div}>
        <Logo className={style.footer__logo} ghost />
        <text.I className={style.footer__i} master small>Aquele que substitui por ser melhor</text.I>
        <Nav className={style.footer__nav} />
      </div>
      <Social className={style.footer__social} />
    </Container>
  </footer>
