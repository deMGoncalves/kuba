import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (footer) =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      {footer.name}
    </container.Div>
  </footer>
