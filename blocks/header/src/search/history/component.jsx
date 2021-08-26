import h from '@kuba/h'
import * as f from '@kuba/f'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'

export default (history) =>
  <Show when={history.has}>
    <span className={style.history__span}>Buscas recentes</span>
    {
      f.map(history.values, (value) =>
        <link.Master className={style.history__link} onClick={() => history.select(value)}>{value}</link.Master>)
    }
  </Show>
