import h from '@kuba/h'
import * as f from '@kuba/f'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import text from '@kuba/text'
import style from './style'

export default (cookiebar) =>
  <aside className={style.cookiebar} opened:isTruthy={cookiebar.opened}>
    <text.Strong className={style.cookiebar__strong} master darker xs bold>Política de Privacidade</text.Strong>
    <text.P className={style.cookiebar__p} master xxxs>Utilizamos cookies para oferecer melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar conteúdos.</text.P>
    <Hide when={f.equal(cookiebar.aceite, 'yes')}>
      <button.Primary className={style.cookiebar__button} onClick={() => cookiebar.aceitar()} bold>Acitar Cookies</button.Primary>
    </Hide>
    <Hide when={f.equal(cookiebar.aceite, 'no')}>
      <button.naked.Master className={style.cookiebar__button} onClick={() => cookiebar.recusar()} darker bold>Recusar Cookies</button.naked.Master>
    </Hide>
  </aside>
