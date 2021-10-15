import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (cover) =>
  <section className={[style.cover, cover.className]}>
    <text.H1 className={style.cover__h1} master lightest md bold>{cover.name}</text.H1>
    <text.Blockquote className={style.cover__blockquote} master lightest lg medium>
      <text.city className={style.cover__city} master lightest xxxs>{cover.author}</text.city><br />
      {cover.description}
    </text.Blockquote>
  </section>
