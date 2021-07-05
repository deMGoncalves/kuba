import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Action className={[style.services, props.className]}>
    <icon.Comment className={style.services__icon} slot='icon' larger />
    <text.P className={style.services__p} slot='label' master ligth small>
      serviços e<br /><strong>Atendimento</strong>
    </text.P>
    <text.Strong className={style.services__strong} slot='header' master darker>Serviços e atendimento</text.Strong>
    <Fragment slot='main'>
      <link.Master className={style.services__link} href='mailto:suporte@usefashion.com' master darker small>suporte@usefashion.com</link.Master>
      <link.Master className={style.services__link} href='tel:11-4858-9425' master darker small>(11) 4858-9425</link.Master>
    </Fragment>
  </Action>
