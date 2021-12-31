import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={style.nav} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('shape')} darker medium xxs>shape</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('lixa')} darker medium xxs>lixa</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('parafusos')} darker medium xxs>parafusos</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('truck')} darker medium xxs>truck</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('cushionSet')} darker medium xxs>cushion set</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('pads')} darker medium xxs>pads</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('rodas')} darker medium xxs>roda</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('rolamentos')} darker medium xxs>rolamentos</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('chave')} darker medium xxs>chave</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
