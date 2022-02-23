import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (view) =>
  <text.Span uid='view' className={style.view} len:isTruthy={view.len} master xxxs regular>{view.len} visualizações</text.Span>
