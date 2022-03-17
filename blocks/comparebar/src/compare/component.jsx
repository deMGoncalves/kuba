import button from '@kuba/button'
import h from '@kuba/h'
import style from './style'

export default (compare) =>
  <button.icon.Compare className={[style.compare, compare.className]} onClick={() => compare.open()} />
