import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import Show from '@kuba/Show'
import style from './style'

export default (path, i) =>
  <>
    <Show when={i}>
      <icon.AngleRight className={style.breadcrumb__icon} />
    </Show>
    <link.Master className={style.breadcrumb__link} href={path.url} small>{path.title}</link.Master>
  </>
