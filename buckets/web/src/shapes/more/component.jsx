import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (more) =>
  <text.Button className={style.more} onClick={() => more.onClick()} master darker xxxs medium>{more.content}</text.Button>
