import h, { Repeat } from '@kuba/h'
import Metro from '@kuba/metro'
import Story from '@kuba/story'
import Bubble from './bubble'
import style from './style'

export default (props, children) =>
  <Story {...props} className={[style.navigation, props.className]}>
    {children.title}
    <Metro className={style.exploration__metro}>
      <Repeat iterator={props.iterator} component={Bubble} />
    </Metro>
  </Story>
