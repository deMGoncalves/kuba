import h from '@rex/h'
import * as f from '@rex/f'
import Picture from '@rex/kit/src/picture'
import schema from './schema.json'
import style from './style.css'

export default (props) =>
  <div className={[style.social, props.className]}>
    {
      f.map(schema, (url) =>
        <Picture className={style.social__picture}>
          <source srcSet={url} />
        </Picture>
      )
    }
  </div>
