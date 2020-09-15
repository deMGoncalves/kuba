import h from '@rex/h'
import * as f from '@rex/f'
import * as c from '@components'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <div className={style.social}>
    {
      f.map(schema, (url) =>
        <c.Picture className={style.social__picture}>
          <source srcSet={url} />
        </c.Picture>
      )
    }
  </div>
