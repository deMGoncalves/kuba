import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'

export default (site) =>
  <>
    <Hide when={site.pristine}>
      <a className={style.site} href={site.url} onClick:prevent={() => site.redirect()} target='_blank'>
        {site.content}
        <icon.Share onColor />
      </a>
    </Hide>
    <Show when={site.pristine}>
      <button.naked.Master className={style.site} darker medium />
    </Show>
  </>
