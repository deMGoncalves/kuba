import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import text from '@kuba/text'
import style from './style'

export default (thumbnail) =>
  <Figure className={style.thumbnail} alt={thumbnail.alt}>
    <Fragment slot='sources'>
      <source srcSet={thumbnail.src} />
    </Fragment>
    <Fragment slot='caption'>
      <text.Span master xxxs>Créditos para {thumbnail.creditos}</text.Span>
    </Fragment>
  </Figure>
