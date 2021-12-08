import h from '@kuba/h'
import style from './style'

export default (article) =>
  <div className={style.article}>{article.name}</div>
