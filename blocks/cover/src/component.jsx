import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import text from '@kuba/text'
import Link from './link'
import style from './style'

export default (cover) =>
  <section className={[style.cover, cover.className]}>
    <text.H1 className={style.cover__h1} master lightest md bold>{cover.name}</text.H1>
    <text.Blockquote className={style.cover__blockquote} master lightest lg medium>
      <text.city className={style.cover__city} master lightest xxxs>{cover.author}</text.city>
      {cover.description}
    </text.Blockquote>
    <nav className={style.cover__nav}>
      <Repeat iterator={cover.links} component={Link} />
    </nav>
  </section>
