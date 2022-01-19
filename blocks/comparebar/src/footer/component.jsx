import h from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (footer) =>
  <footer className={style.footer} valid={footer.valid}>
    <link.Master className={style.footer__link} href={urlFor('comparar')} darker xxs medium>
      Ver comparação
      <icon.ArrowLongRight />
    </link.Master>
  </footer>
