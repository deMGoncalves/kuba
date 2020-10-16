import h, { Repeat } from '@rex/h'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

const Feature = (props, i) =>
  <li className={style.features__li}>
    <ui.Picture className={[style.features__picture, style[`p${i}`]]}>
      <source srcSet={props.icon} />
    </ui.Picture>
    <ui.Heading level='3'>{props.title}</ui.Heading>
    <p className={style.features__p}>{props.description}</p>
  </li>

export default () =>
  <ul className={style.features}>
    <Repeat iterator={schema} component={Feature} />
  </ul>
