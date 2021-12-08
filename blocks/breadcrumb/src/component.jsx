import h from '@kuba/h'
import container from '@kuba/container'
import Repeat from '@kuba/repeat'
import Metro from '@kuba/metro'
import Path from './path'
import style from './style'

export default (breadcrumb) =>
  <container.Section className={style.breadcrumb}>
    <Metro>
      <Repeat iterator={breadcrumb.paths} component={Path} />
    </Metro>
  </container.Section>
