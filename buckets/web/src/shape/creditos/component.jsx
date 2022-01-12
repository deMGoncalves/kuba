import h from '@kuba/h'
import link from '@kuba/link'
import text from '@kuba/text'
import style from './style'

export default (creditos) =>
  <section className={style.creditos}>
    <text.Span master xxxs>Créditos para</text.Span>
    <link.Complete href={creditos.url} target='_blank' xxxs>{creditos.marca}</link.Complete>
  </section>
