import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import text from '@kuba/text'
import Nav from './nav'
import Social from './social'
import schema from './schema.json'
import style from './style'

export default (props) =>
  <footer {...props} className={[style.footer, props.className]}>
    <Container className={style.footer__container}>
      <div className={style.footer__div}>
        <Logo className={style.footer__logo} ghost />
        <text.Strong className={style.footer__strong} master darker bold>{schema.title}</text.Strong>
        <text.P className={style.footer__i} master small>{schema.description}</text.P>
        <Nav className={style.footer__nav} />
      </div>
      <Social className={style.footer__social} />
    </Container>
  </footer>
