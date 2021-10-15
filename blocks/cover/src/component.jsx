import h from '@kuba/h'
import Link from '@kuba/link'
import text from '@kuba/text'
import style from './style'

export default (cover) =>
  <section className={[style.cover, cover.className]}>
    <text.H1 className={style.cover__h1} master lightest md bold>{cover.name}</text.H1>
    <text.Blockquote className={style.cover__blockquote} master lightest lg medium>
      <text.city className={style.cover__city} master lightest xxxs>{cover.author}</text.city>
      {cover.description}
    </text.Blockquote>
    <nav className={style.cover__nav}>
      <Link className={style.cover__link} href='//github.com/deMGoncalves/kuba' target='_blank' master lightest xxs medium>Github</Link>
      <Link className={style.cover__link} href='//docs.kuba.engineer' target='_blank' master lightest xxs medium>Documentação</Link>
      <Link className={style.cover__link} href='//todomvc.kuba.engineer' target='_blank' master lightest xxs medium>Todo MVC</Link>
    </nav>
  </section>
