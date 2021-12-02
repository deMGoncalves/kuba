import h from '@kuba/h'
import style from './style'

export default (footer) =>
  <footer className={style.footer}>
    {footer.name}
  </footer>
