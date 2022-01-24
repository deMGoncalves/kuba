import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import Help from './help'
import story from '@kuba/story'
import text from '@kuba/text'
import schema from './schema'
import style from './style'

export default (shelf) =>
  <story.Section>
    <section className={style.shelf__section}>
      <container.Div className={style.shelf__thumb}>
        {shelf.thumbnail}
      </container.Div>
    </section>
    <section className={[style.shelf__section, style.especificacao]}>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Tamanho</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tamanho}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Wheelbase</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.wheelbase}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Nose</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.nose}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Tail</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tail}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Concave</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.concave}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Lixa</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.lixa}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Laminas</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.laminas}
      </container.Div>
      <container.Div className={style.shelf__label}>
        <text.Span master darkest medium sm>Material</text.Span>
        <Help text={schema.tamanho} />
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.material}
      </container.Div>
    </section>
  </story.Section>
