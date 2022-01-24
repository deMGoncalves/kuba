import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

export default (footer) =>
  <footer className={style.footer} valid={footer.valid}>
    <link.Master className={style.footer__link} onClick={() => footer.redirect()} darker xxs medium>
      Ver comparação
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
