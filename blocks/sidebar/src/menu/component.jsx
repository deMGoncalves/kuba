import h from '@kuba/h'
import button from '@kuba/button'
import style from './style'

export default (menu) =>
  <button.icon.Bars className={style.menu} onClick={() => menu.open()} />