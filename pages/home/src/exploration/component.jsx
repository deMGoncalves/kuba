import h from '@kuba/h'
import Exploration from '@kuba/exploration'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Exploration {...schema} className={[style.exploration, props.className]} />
