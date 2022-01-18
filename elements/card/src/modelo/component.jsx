import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (modelo) =>
  <link.Master className={style.modelo} darker xxs medium>{modelo.valor}</link.Master>
