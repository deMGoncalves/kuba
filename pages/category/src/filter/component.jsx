import h from '@kuba/h'
import Filter from '@kuba/filter'
import style from './style'

export default (props) =>
  <Filter className={[style.filter, props.className]} />
