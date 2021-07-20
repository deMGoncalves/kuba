import h from '@kuba/h'
import Lazy from '@kuba/lazy'
import style from './style.css'

export default (props) =>
  <Lazy className={[style.inpiration, props.className]} require={() => import('@kuba/inspiration')} />
