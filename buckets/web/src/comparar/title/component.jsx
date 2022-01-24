import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default () =>
  <container.Div>
    <text.H1 className={style.shelf__title} master darker lg bold>Compare</text.H1>
  </container.Div>
