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
    <text.Strong className={style.menu__text} slot='header' master darker>use fashion</text.Strong>
    <Fragment slot='main'>
      <span className={style.menu__span}>Navegue por</span>
      <link.Master className={style.menu__link} href={urlFor('home')} master darker small>Home</link.Master>
      <link.Master className={style.menu__link} href={urlFor('estrategia')} master darker small>Estratégia</link.Master>
      <link.Master className={style.menu__link} href={urlFor('inspiracao')} master darker small>Inspiração</link.Master>
      <link.Master className={style.menu__link} href={urlFor('produto')} master darker small>Produto</link.Master>
      <link.Master className={style.menu__link} href={urlFor('venda')} master darker small>Venda</link.Master>
      <link.Master className={style.menu__link} href={urlFor('segmentos')} master darker small>Segmentos</link.Master>
      <link.Master className={style.menu__link} href={urlFor('imagens')} master darker small>Imagens</link.Master>
      <span className={style.menu__span}>Meus conteúdos</span>
      <link.Master className={style.menu__link} href='//nova.usefashion.com/saved-content' master darker small>Contúdos</link.Master>
      <link.Master className={style.menu__link} href='//nova.usefashion.com/interests' master darker small>Interesse</link.Master>
      <span className={style.menu__span}>Serviços e atendimento</span>
      <link.Master className={style.menu__link} href='mailto:suporte@usefashion.com' master darker small>suporte@usefashion.com</link.Master>
      <link.Master className={style.menu__link} href='tel:11-4858-9425' master darker small>(11) 4858-9425</link.Master>
      <span className={style.menu__span}>Perfil</span>
      <link.Master className={style.menu__link} href='//login.userfashion.com/login' master darker small>Sair</link.Master>
    </Fragment>
  </Action>
