import h from '@kuba/h'
import Navigation from '@kuba/navigation'
import style from './style'

export default (props) =>
  <Navigation className={[style.navigation, props.className]} />
