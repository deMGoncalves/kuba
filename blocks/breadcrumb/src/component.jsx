import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'

export default (breadcrumb) =>
  <container.Section className={style.breadcrumb} slot='breadcrumb'>
    <Metro>
      {breadcrumb.paths}
    </Metro>
  </container.Section>
