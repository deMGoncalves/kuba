import h from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <ul className={style.items}>
    {
      f.map(schema, (dto, i) =>
        <li className={style.items__li}>
          <ui.Picture className={[style.items__picture, style[`p${i}`]]}>
            <source srcSet={dto.icon} />
          </ui.Picture>
          <h2 className={style.items__h2}>{dto.title}</h2>
          <p className={style.items__p}>{dto.description}</p>
        </li>
      )
    }
  </ul>
