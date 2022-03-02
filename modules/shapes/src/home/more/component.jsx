import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (more) =>
  <text.Button className={style.more} onClick={() => more.next()} visible={more.visible} master darker xxxs bold>{more.content}</text.Button>
