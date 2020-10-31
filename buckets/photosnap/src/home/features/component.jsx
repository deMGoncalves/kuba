import h, { Repeat, Zone } from '@rex/h'
import Feature from './feature'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Zone>
    <ul className={style.features}>
      <Repeat iterator={schema} component={Feature} />
    </ul>
  </Zone>
