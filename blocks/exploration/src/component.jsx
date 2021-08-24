import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Box from './box'
import style from './style'

export default (props) =>
  <Story className={[style.exploration, props.className]}>
    <text.H2 className={style.exploration__h2} master darker large bold>{props.title}</text.H2>
    <div className={style.exploration__div}>
      <Repeat iterator={props.departaments} component={Box} />
    </div>
  </Story>
