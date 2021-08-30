import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (props) =>
  <link.Master className={style.nav__link} href={props.url}>{props.text}</link.Master>
