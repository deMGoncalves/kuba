import h from '@kuba/h'
import Exploration from '@kuba/exploration'
import style from './style'

export default (props) =>
  <Exploration className={[style.exploration, props.className]} />
