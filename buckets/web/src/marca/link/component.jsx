import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style'

export default (link) =>
  <>
    <Show when={link.url}>
      <text.Label>
        <text.Strong master darker xxs>Site:</text.Strong>
        <link.Master href={link.url} className={style.link} onClick={() => link.redirect()} regular>{link.nome}</link.Master>
      </text.Label>
    </Show>
  </>
