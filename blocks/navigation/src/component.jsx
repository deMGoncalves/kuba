import h from '@kuba/h'
import Metro from '@kuba/metro'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Bubble from './bubble'
import style from './style'

export default (props) =>
  <Story {...props} className={[style.navigation, props.className]}>
    <text.H2 className={style.inspiration__h2} master darker sm medium>{props.title}</text.H2>
    <Metro className={style.exploration__metro}>
      <Repeat iterator={props.iterator} component={Bubble} />
    </Metro>
  </Story>
