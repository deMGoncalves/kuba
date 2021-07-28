import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import Sampling from '@kuba/sampling'
import text from '@kuba/text'
import style from './style'

export default (feed) =>
  <Sampling className={style.shelf__sampling} onClick={() => location.assign(urlFor('report', feed.id))}>
    <source srcSet={encodeURI(`${__settings.cloudfront.host}/${feed.image?.small['1']}`)} slot='source' />
    <text.Strong className={style.shelf__strong} slot='caption' master darker small>{feed.title}</text.Strong>
  </Sampling>
