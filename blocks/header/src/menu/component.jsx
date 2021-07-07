import h, { Fragment } from '@kuba/h'
import { urlFor } from '@kuba/router'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Action className={[style.menu, props.className]}>
    <icon.Menu className={style.menu__icon} slot='icon' />
    <text.Strong className={style.menu__text} slot='header' master darker>kuba</text.Strong>
    <Fragment slot='main'>
      <span className={style.menu__span}>navegue por</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>home</link.Master>
      <link.Master className={style.menu__link} href={urlFor('cadeiras')} master darker small>cadeiras</link.Master>
      <link.Master className={style.menu__link} href={urlFor('sofas')} master darker small>sofás</link.Master>
      <link.Master className={style.menu__link} href={urlFor('acessorios')} master darker small>acessórios</link.Master>
      <span className={style.menu__span}>pedidos e minha conta</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>lista de desejo</link.Master>
      <span className={style.menu__span}>serviços e atendimento</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>central de atendimento</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>compre pelo Whatsapp</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>cartão Kuba 4004-0000</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>acompanhar meu pedido</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>solicitar devolução de pedido</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>encontrar lojas</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>Kuba&VC</link.Master>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>venda no Kuba</link.Master>
    </Fragment>
  </Action>
