import h from '@kuba/h'
import i18n from './i18n'
import style from './style'

export default (cookie) =>
  <button className={style.cookie} onClick={() => cookie.open()} visible:isTruthy={cookie.visible}>{i18n.text}</button>
