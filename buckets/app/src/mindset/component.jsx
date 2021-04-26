import h from '@kuba/h'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.mindset}>
    <Story className={style.mindset__story}>
      <text.H1 className={style.mindset__h1} master darker larger>Mindset</text.H1>
    </Story>
  </Site>
