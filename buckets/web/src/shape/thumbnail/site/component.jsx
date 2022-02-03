import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'

export default (site) =>
  <>
    <Hide when={site.pristine}>
      <button.naked.Master className={style.site} onClick={() => site.redirect()} darker medium>
        Comprar
        <icon.Share />
      </button.naked.Master>
    </Hide>
    <Show when={site.pristine}>
      <button.naked.Master className={style.site} darker medium />
    </Show>
  </>
