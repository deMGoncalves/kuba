import h from '@kuba/h'
import container from '@kuba/container'
import Logo from '@kuba/logo'
import style from './style'

export default () =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      <Logo symbol />
    </container.Div>
  </footer>
