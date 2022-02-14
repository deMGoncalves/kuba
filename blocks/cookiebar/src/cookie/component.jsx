import h from '@kuba/h'
import style from './style'

export default (cookie) =>
  <button className={style.cookie} onClick={() => cookie.open()} visible:isTruthy={cookie.visible}>Política de Privacidade</button>
