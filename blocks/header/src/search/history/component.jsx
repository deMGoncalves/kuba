import h from '@kuba/h'
import * as f from '@kuba/f'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (history) =>
  <Show when={history.has}>
    <text.Strong className={style.history__strong} master darker small>Buscas recentes</text.Strong>
    <ul className={style.history__ul}>
      {
        f.map(history.values, (value) =>
          <text.Li className={style.history__li} onClick={() => history.select(value)} master small>{value}</text.Li>)
      }
    </ul>
  </Show>
