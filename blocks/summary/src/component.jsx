import h, { Repeat } from '@kuba/h'
import * as f from '@kuba/f'
import Story from '@kuba/story'
import Chapter from './chapter'
import style from './style.css'

export default (props) =>
  <Story className={[style.summary, props.className]}>
    <div className={style.summary__div}>
      <Repeat iterator={f.or(props.iterator, [])} component={Chapter} />
    </div>
  </Story>
