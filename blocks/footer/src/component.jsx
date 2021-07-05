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
        <Logo className={style.footer__logo} />
        <text.Strong className={style.footer__strong} master darker small>Transformamos negócios de moda</text.Strong>
        <text.P className={style.footer__i} master small>Crie coleções de sucesso e aumente suas vendas com a maior plataforma brasileira de pesquisa de tendências de moda</text.P>
        <Nav className={style.footer__nav} />
      </div>
      <Social className={style.footer__social} />
    </Container>
  </footer>
