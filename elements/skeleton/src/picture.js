import h from '@kuba/h'
import style from './style'

export default (props) =>
  <picture {...props} className={[style.picture, props.className]} />
