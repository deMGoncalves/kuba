import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default (footer) =>
  <footer className={style.footer} valid:isTruthy={footer.valid}>
    <link.Master className={style.footer__link} href={footer.href} onClick={() => footer.redirect()} darker xxxs bold>
      Ver comparação
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
