import h, { Repeat } from '@rex/h'
import Feature from './feature'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <ul className={style.features}>
    <Repeat iterator={schema} component={Feature} />
  </ul>
