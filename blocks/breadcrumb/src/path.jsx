import h, { Fragment, Show } from '@kuba/h'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style.css'

export default (path, i) =>
  <>
    <Show if={i}>
      <icon.AngleRight className={style.breadcrumb__icon} />
    </Show>
    <link.Master className={style.breadcrumb__link} href={path.url} small>{path.title}</link.Master>
  </>
