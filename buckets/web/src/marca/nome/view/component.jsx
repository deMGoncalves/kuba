import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (view) =>
  <text.Span uid='view' className={style.view} len:isTruthy={view.len} master xxxs regular>{view.len} visualizações</text.Span>
