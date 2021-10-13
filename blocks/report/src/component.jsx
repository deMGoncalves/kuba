import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import Shield from './shield'
import style from './style'

export default (report) =>
  <Story className={style.report}>
    <Repeat iterator={report.shields} component={Shield} />
  </Story>
