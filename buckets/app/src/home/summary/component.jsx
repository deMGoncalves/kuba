import h, { Repeat } from '@kuba/h'
import Story from '@kuba/story'
import Chapter from './chapter'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <Story className={[style.summary, props.className]}>
    <div className={style.summary__div}>
      <Repeat iterator={schema} component={Chapter} />
    </div>
  </Story>
