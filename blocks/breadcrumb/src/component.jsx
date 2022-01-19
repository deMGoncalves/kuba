import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import style from './style'

export default (breadcrumb) =>
  <container.Section className={style.breadcrumb}>
    <Metro>
      {breadcrumb.paths}
    </Metro>
  </container.Section>
