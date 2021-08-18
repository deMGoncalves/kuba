import h from '@kuba/h'
import Shelf from '@kuba/shelf'
import style from './style'

export default (props) =>
  <Shelf className={[style.shelf, props.className]} />
