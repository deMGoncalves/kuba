import h from '@kuba/h'
import Lazy from '@kuba/lazy'
import schema from './schema'
import style from './style'

export default (props) =>
  <Lazy {...schema} className={[style.inpiration, props.className]} require={() => import('@kuba/inspiration' /* webpackChunkName: "inspiration" */)} />
