import h from '@kuba/h'
import Link from '@kuba/link'
import style from './style'

export default (props) =>
  <Link className={style.cover__link} href={props.href} target='_blank' master lightest xxs medium>{props.content}</Link>
