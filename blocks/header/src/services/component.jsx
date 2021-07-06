import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
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
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>central de atendimento</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>compre pelo Whatsapp</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>cartão Kuba 4004-0000</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>acompanhar meu pedido</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>solicitar devolução de pedido</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>encontrar lojas</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>Kuba&VC</link.Master>
      <link.Master className={style.services__link} href={urlFor('home')} master darker small>venda no Kuba</link.Master>
    </Fragment>
  </Action>
