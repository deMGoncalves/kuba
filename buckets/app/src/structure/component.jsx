import h from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.structure}>
    <Story className={style.structure__story}>
      <text.H1 className={style.structure__h1} master darker larger>Structure</text.H1>
    </Story>
  </Site>
