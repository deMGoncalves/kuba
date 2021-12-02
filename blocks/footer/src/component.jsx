import h from '@kuba/h'
import container from '@kuba/container'
import Logo from '@kuba/logo'
import text from '@kuba/text'
import style from './style'

export default () =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      <Logo symbol />
      <text.P className={style.footer__text} master dark xxxs>Simples, pequeno e imperfeito. Uma visao alem da programacao.</text.P>
    </container.Div>
  </footer>
