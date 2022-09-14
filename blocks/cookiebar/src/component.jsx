import * as f from '@kuba/f'
import button from '@kuba/button'
import h from '@kuba/h'
import i18n from './i18n'
import style from './style'
import text from '@kuba/text'

const opened = f.dunder('opened')

const component = (cookiebar) =>
  <aside className={style.cookiebar} opened:isTruthy={opened(cookiebar)}>
    <text.Strong className={style.cookiebar__strong} master darker xs bold>{i18n.title}</text.Strong>
    <text.P className={style.cookiebar__p} master xxxs>{i18n.description}</text.P>
    <button.Primary className={style.cookiebar__button} onClick={() => cookiebar.aceitar()} bold>{i18n.allow}</button.Primary>
    <button.naked.Master className={style.cookiebar__button} onClick={() => cookiebar.recusar()} darker bold>{i18n.deny}</button.naked.Master>
  </aside>

f.assign(component, {
  opened: f.dunder.opened
})

export default component
