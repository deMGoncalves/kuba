import h, { Repeat } from '@kuba/h'
import * as f from '@kuba/f'
import Chapter from './chapter'
import style from './style.css'

export default (props) =>
  <div className={[style.summary, props.className]}>
    <Repeat iterator={f.or(props.iterator, [])} component={Chapter} />
  </div>
