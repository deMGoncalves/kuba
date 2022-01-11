import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style'

export default (lnk) =>
  <>
    <Show when={lnk.url}>
      <text.Label>
        <text.Strong master darker xxs>Site:</text.Strong>
        <link.Master className={style.link} onClick={() => lnk.redirect()} regular>{lnk.nome}</link.Master>
      </text.Label>
    </Show>
  </>
