import h from '@kuba/h'
import Container from '@kuba/container'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <footer {...props} className={[style.footer, props.className]}>
    <Container className={style.footer__container}>
      <text.I className={style.footer__i} master small>Simples, pequeno e imperfeito. Uma visão além da programação.</text.I>
      <nav className={style.footer__nav}>
        <icon.Facebook className={style.footer__icon} large />
        <icon.Github className={style.footer__icon} large />
        <icon.Instagram className={style.footer__icon} large />
        <icon.Linkedin className={style.footer__icon} large />
        <icon.Twitter className={style.footer__icon} large />
        <icon.Youtube className={style.footer__icon} large />
      </nav>
    </Container>
  </footer>
