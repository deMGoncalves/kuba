import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <link.Menu className={style.link} href={urlFor(props.page)} light xxs>
    {props.text}
    <text.Span className={style.link__icon} menu light xxs medium>{props.icon}</text.Span>
  </link.Menu>
