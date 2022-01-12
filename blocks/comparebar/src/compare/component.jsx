import h from '@kuba/h'
import button from '@kuba/button'
import style from './style'

export default (compare) =>
  <button.icon.Compare className={[style.compare, compare.className]} onClick={() => compare.open()} />
