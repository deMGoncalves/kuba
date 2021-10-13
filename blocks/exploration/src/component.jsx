import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import Shield from './shield'
import style from './style'

export default (exploration) =>
  <Story className={style.exploration}>
    <Repeat iterator={exploration.shields} component={Shield} />
  </Story>
