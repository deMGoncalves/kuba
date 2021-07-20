import h from '@kuba/h'
import Lazy from '@kuba/lazy'
import style from './style.css'

export default (props) =>
  <Lazy className={[style.workflow, props.className]} require={() => import('@kuba/workflow')} />
