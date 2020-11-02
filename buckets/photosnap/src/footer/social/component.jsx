import h from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <div className={[style.social, props.className]}>
    {
      f.map(schema, (url) =>
        <ui.Picture className={style.social__picture}>
          <source srcSet={url} />
        </ui.Picture>
      )
    }
  </div>
