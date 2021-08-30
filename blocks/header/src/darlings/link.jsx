import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (props) =>
  <link.Master className={style.darlings__link} href={props.url}>{props.text}</link.Master>
