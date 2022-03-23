import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (more) =>
  <text.Button className={style.more} onClick={() => more.next()} visible={more.visible} master darker xxxs medium>{more.content}</text.Button>
