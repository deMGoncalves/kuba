import h from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <ul className={style.features}>
    {
      f.map(schema, (dto, i) =>
        <li className={style.features__li}>
          <ui.Picture className={[style.features__picture, style[`p${i}`]]}>
            <source srcSet={dto.icon} />
          </ui.Picture>
          <h3 className={style.features__h3}>{dto.title}</h3>
          <p className={style.features__p}>{dto.description}</p>
        </li>
      )
    }
  </ul>
