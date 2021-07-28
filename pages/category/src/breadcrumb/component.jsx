import h from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import schema from './schema'
import style from './style'

export default (props) =>
  <Breadcrumb {...schema} className={[style.breadcrumb, props.className]} />
