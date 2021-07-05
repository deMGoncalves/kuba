import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style.css'

export default (props) =>
  <nav {...props} className={[style.nav, props.className]}>
    <link.Master className={style.nav__link} href={urlFor('estrategia')} master darker small>Estratégia</link.Master>
    <link.Master className={style.nav__link} href={urlFor('inspiracao')} master darker small>Inspiração</link.Master>
    <link.Master className={style.nav__link} href={urlFor('produto')} master darker small>Produto</link.Master>
    <link.Master className={style.nav__link} href={urlFor('venda')} master darker small>Venda</link.Master>
    <link.Master className={style.nav__link} href={urlFor('segmentos')} master darker small>Segmentos</link.Master>
    <link.Master className={style.nav__link} href={urlFor('imagens')} master darker small>Imagens</link.Master>
  </nav>
