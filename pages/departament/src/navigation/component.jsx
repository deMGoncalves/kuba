import h from '@kuba/h'
import Navigation from '@kuba/navigation'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Navigation {...schema} className={[style.navigation, props.className]} />
