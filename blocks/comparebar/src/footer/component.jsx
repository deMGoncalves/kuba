import h from '@kuba/h'
import container from '@kuba/container'
import icon from '@kuba/icon'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default () =>
  <container.Footer className={style.footer}>
    <link.Master className={style.footer__link} href={urlFor('comparar')} darker xxs medium>
      Ver comparação
      <icon.ArrowLongRight />
    </link.Master>
  </container.Footer>
